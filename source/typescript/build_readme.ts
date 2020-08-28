#!/usr/bin/env node

/**
 * Targets a single CandleFW library and generates a readme.md page from the readme templates, source code, and comments.
 */

import debug_data from "@candlefw/ts/source/grammar/typescript.debug_info.js";
import { TSNodeTypeLU, TSNode, parser, renderWithFormatting } from "@candlefw/ts";
import { traverse } from "@candlefw/conflagrate";
import { lrParse } from "@candlefw/hydrocarbon";
import URL from "@candlefw/url";
import { Lexer } from "@candlefw/wind";

import txt_to_svg from "text-to-svg";
import fs from "fs";
import path from "path";
import comment_parser_data from "./parser_data/comment.js";
import fragment_parser_data from "./parser_data/doc_fragment.js";

const fsp = fs.promises,
    library = process.cwd(),
    fn_regex = /(file\:\/\/)(\/)*([A-Z]\:)*/g,
    doc_dir = path.join("/", import.meta.url.replace(fn_regex, ""), "../../.."),
    cfw_font = txt_to_svg.loadSync(path.join(doc_dir, './source/font/cfw.otf'));


function mergeComments(ast: TSNode, comments: Lexer[]) {

    for (const comment of comments) {
        let closest_node = null;

        if (!closest_node || closest_node.pos.off < comment.off) {

            for (const { node } of traverse(ast, "nodes")) {
                if (node.pos) {
                    if (node.pos.off < comment.off) continue;

                    //Get the first node who
                    closest_node = node;
                    break;
                }
            }
        }

        if (closest_node) {
            if (!closest_node.comments)
                closest_node.comments = [comment];
            else
                closest_node.comments.push(comment);

            console.log(TSNodeTypeLU[closest_node.type], comment.slice());
        }
    }
}

function renderDocumentSection(name: any): any {
    return `[Docs](https://cfw.acweathersby.com/${name})`;
}

function renderPollyFillBrief(ast: never): any {
    return `### TODO - FILL THIS IN! \n\`\`\`ts\n${renderWithFormatting(ast)}\n\`\`\``;
}

function renderCandleFWDepends(name: any, cfw_depends: string[]): any {
    return `
As a part of CandleFW, cfw.${name} relies on the following libraries to make the magic happen. 
The modular design of CFW allows each on to be used independently for specific project needs. 
Give them a look to find out more. 

- ${cfw_depends.map(e => `[${e}](https://github.com/candlefw/${e})`).join("\n- ")}`;

}

function renderInstall(name: any): any {
    return `
#### npm
\`\`\`bash
$ npm install --save @candlefw/${name}
\`\`\`
#### yarn
\`\`\`bash
$ yarn add @candlefw/${name}
\`\`\``;
}

function renderHeaderAndLogo(name: any, package_json: object, library_root: URL) {

    const
        logo_url = URL.resolveRelative("./source/brand/logo.svg", library_root),
        source_icon_url = URL.resolveRelative("./source/brand/go_to_source.svg", library_root),
        source_icon = fs.readFileSync(path.join(doc_dir, "./source/svg/go_to_source.svg"), { encoding: "utf8" }),
        logo_partial = fs.readFileSync(path.join(doc_dir, "./source/svg/cfw.partial.svg"), { encoding: "utf8" }),
        name_path = cfw_font.getPath(name.toUpperCase(), { x: 0, y: 0, fontSize: 32, anchor: 'top', attributes: { fill: "rgb(50,50,50)" } }),
        cfw_path = cfw_font.getPath("CFW", { x: 0, y: 0, fontSize: 14, anchor: 'top', attributes: { fill: "rgb(100,100,100)" } }),
        logo =
            `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg xmlns:dc="http://purl.org/dc/elements/1.1/" 
    xmlns:cc="http://creativecommons.org/ns#"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
    xmlns:svg="http://www.w3.org/2000/svg"
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="100%" height="100%" viewBox="0 0 ${name.length * 35 + 40} 85" 
    >
${logo_partial}
<g transform="matrix(1,0,0,1,40,20)">
${cfw_path}
</g>
<g transform="matrix(1,0,0,1,40,40)">
${name_path}
</g>
</svg>`;

    //Save the logo to the brand folder
    fs.mkdirSync(logo_url.dir, { recursive: true });
    fs.writeFileSync(logo_url.toString(), logo, { flag: "w" });
    fs.writeFileSync(source_icon_url.toString(), source_icon, { flag: "w" });

    return `<!-- this is a generated document - DO NOT EDIT THIS DOCUMENT - Refer to https://github.com/candlefw/doc/source/doc_fragments/generating_readmes.md -->
<h1 align=center>
    <img alt="cfw.${name}" height="100" src="source/brand/logo.svg"/>
</h1>

<h3 align=center>${package_json.description}</h3>

<p align=center> <sub><b>v${package_json.version}</b></sub> </p>`;
}


async function gatherFragmentDocuments(p: string): /* File Names */ Promise<URL[]> {
    const file_names = [];

    try {
        for (const d of await fsp.readdir(p, { withFileTypes: true })) {
            if (d.isDirectory())
                await gatherFragmentDocuments(path.join(p, d.name + "/"));
            else {
                const url = URL.resolveRelative("./" + d.name, p);
                file_names.push(url);
            }
        }
    } catch (e) {
        return [];
    }

    return file_names;
}


function sanitizeSourceURL(file_url: URL): string {
    return file_url.toString().replace(process.cwd(), "");
}

type fragment_data = { type: string, preamble: { usage: string[] | string, specifier: string; }, content: string; };

async function attachFragmentsToSections(sections: any) {
    for (const file_url of await gatherFragmentDocuments(path.join(doc_dir, "source/doc_fragments/"))) {
        try {
            const
                text = await file_url.fetchText(),
                text_lex = new Lexer(text);

            text_lex.source = sanitizeSourceURL(file_url);

            const { value, error } = lrParse<fragment_data[]>(text_lex, fragment_parser_data, null);


            if (!error)
                for (const doc_fragment of value) {
                    const
                        start = doc_fragment.pos.copy(),
                        end = doc_fragment.pos.getEnd();

                    while (!end.END) end.next();

                    addFragmentToSections(doc_fragment, sections, `${doc_fragment.pos.source}`, `L${start.line + 1}-L${end.line + 1}`);
                }
            else console.warn(error);

        } catch (e) {
            console.warn(e);
        }
    };
}


function attachCommentsToSections(
    comments: Lexer[],
    sections: any
) {
    for (const comment of comments) {

        const { value, error } = lrParse<fragment_data>(comment.slice(), comment_parser_data),
            end = comment.getEnd();

        if (!error) {
            addFragmentToSections(value, sections, `${comment.source}`, `L${comment.line + 1}-L${end.line + 1}`);
        }
    }
}

function addFragmentToSections(doc_fragment: fragment_data, sections: any, origin: string = "undefined", line) {

    const { content, preamble, type } = doc_fragment;

    if ((type == "multiline" || type == "fragment")
        && preamble
        && preamble.usage
        && (
            typeof preamble.usage == "object"
                ? preamble.usage.filter(e => e.toUpperCase() == "README").length > 0
                : preamble.usage.toUpperCase().includes("README")
        )) {

        const section = preamble.specifier.toLowerCase();

        if (!sections[section])
            sections[section] = [];

        sections[section].push(`\n\n<!-- origin="file:///.${origin}#${line}" -->\n\n${content}\n\n<div align="right"><a href=".${origin}#${line}"><img src="source/brand/go_to_source.svg" height="18" alt="src"></a></div>`);
    }
}

//open up first page
(async function () {

    await URL.server();

    const
        library_root = new URL(library + "/"),

        package_json = await URL.resolveRelative("./package.json", library_root)
            .fetchJSON()
            .catch(e => {

                //Check for package.json; If this does not exists, then the CWD is not going
                // to be a appropriate environment for the readme builder.

                console.log(e);
                console.warn("Could not find package.json. Exiting");
                process.exit(1);
            }),

        package_root_file = URL.resolveRelative(
            package_json
                .main
                .replace("./build/library/", "./source/typescript/")
                .replace(".js", ".ts"),
            library_root),

        //Grab the package of the library
        readme_url = URL.resolveRelative("./README.md", library_root),

        cfw_depends = Object.entries((package_json.dependencies ?? {}))
            .map(([key, val]) => key)
            .filter(d => d.includes("@candlefw"))
            .map(e => e.replace("@candlefw/", "")),

        name = package_json.name.replace("@candlefw/", ""),

        root_file = await package_root_file.fetchText(),

        //Document Sections -----------------------------------------------

        section_header_indices = Object.fromEntries([
            "header",
            "introduction",
            "brief",
            "install",
            "usage",
            "api",
            "special",
            "contribute",
            "contributors",
            "docs",
            "CFW_Dependencies",
            "license",
        ].map((k, v) => [k, v])),

        sections = {
            install: [],
            brief: [],
            docs: [],
            CFW_Dependencies: [],
            header: [renderHeaderAndLogo(name, package_json, library_root)]
        },

        //Root Source File -----------------------------------------------

        root_file_lexer = new Lexer(root_file);

    root_file_lexer.source = sanitizeSourceURL(package_root_file);

    const { ast, comments } = parser(root_file_lexer, debug_data);

    await attachFragmentsToSections(sections);

    attachCommentsToSections(comments, sections);

    if (sections.install.length == 0)
        sections.install.push(renderInstall(name));

    if (sections.brief.length == 0)
        sections.brief.push(renderPollyFillBrief(ast));

    if (sections.CFW_Dependencies.length == 0 && cfw_depends.length > 0)
        sections.CFW_Dependencies.push(renderCandleFWDepends(name, cfw_depends));

    sections.docs.push(renderDocumentSection(name));

    fs.writeFileSync(readme_url.toString(),
        Object.entries(sections).sort(

            ([a], [b]) => {

                const
                    a_index = section_header_indices[a.toLowerCase()] ?? Infinity,
                    b_index = section_header_indices[b.toLowerCase()] ?? Infinity;

                if (a_index == b_index) return 0;

                return a_index < b_index ? -1 : 1;

            }).filter(([, n]) => n.length > 0).map(([key, nodes]) => `${
                key.toLowerCase() == "header" ? "" :
                    "# " + key.replace(/\_/g, " ").toUpperCase()
                }\n${nodes.join("\n")}`).join("\n\n")
    );
})();