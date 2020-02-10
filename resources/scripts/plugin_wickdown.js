const wick = radiate.wick;

/* 
	Reads the to the end of the line, or next [<] token and
	inserts a block quote section 
*/
wick.plugin(wick.plugin.element, "cm", function(ele, lex, env) {

	const marker = lex.copy();

	const end = lex;

	//Save current state of Ignore White Space
	const IWS = lex.IWS;

	lex.IWS = false;

	while (!end.END && end.ty !== end.types.nl) end.next();

	//Reset IWS
	lex.IWS = IWS;

	const text = new env.functions.text([end.slice(marker)]);

	return env.functions.element_selector("blockquote", null, [text], env, lex);;
})

wick.plugin(wick.plugin.element, "cb", function(ele, lex, env) {

	ele.tag = "pre";

	const text = new env.functions.text([ele.innerToString()]);

	ele.children = [text];
})

wick.plugin(wick.plugin.element, "example", function(ele, lex, env, nc) {
	const inner = ele.innerToString();
	//remove all child nodes. 
	const data = `<span> ${parseWickScope(new nc.whind(inner))} </span>`;

	const ast = nc.compile(
		nc.whind(data),
		env
	);

	if (!ast.error) {
		ele.children = ast.result.children;
	} else {
		console.log(env.errors[0].msg)
	}
	//parse text and parse into a string. 
})

function parseBinding(lex) {
	let output = "<span class=wick-binding>&lpar;&lpar;<span class=wick-binding-body>";

	const start = lex.copy();
	const end = lex.copy();

	while (!end.END && (end.tx != ")" || end.pk.tx != ")")) {
		end.next();
	}

	start.fence(end);

	end.next();

	const t = start.copy();

	output += parseScript(start);

	lex.sync(end);

	return output + "</span>&rpar;&rpar;</span>";
}

const keywords = ("var;const;let;function;constructor;super;new;return;while;for;of;in;case;break;false;true")

function parseTemplateString(lex) {
	let output = "<span class=string>";

	lex.IWS = false;

	while (!lex.END) {
		switch (lex.tx) {
			case "$":
				if (lex.pk.tx == "{") {
					lex.sync().next();
					const cp = lex.copy();
					let bc = 1;

					while (!lex.END && bc > 0) {
						lex.next();
						if (lex.tx == "{") bc++;
						if (lex.tx == "}") bc--;
					}

					output += `</span><span class=operator>\${</span>${parseScript(cp.fence(lex))}<span class=operator>}</span><span class=string>`;
					break;
				}
			default:
				output += lex.tx;
				break;
		}
		lex.next();
	}

	return output + "</span>";
}

function parseScript(lex) {
	let output = "";
	let PS = true//lex.PARSE_STRING;
	lex.IWS = false;
	//lex.PARSE_STRING = false;
	while (!lex.END) {
		switch (lex.ty) {
			case lex.types.op:
				output += `<span class=operator>${lex.tx}</span>`
				break;
			case lex.types.ob:
			case lex.types.cb:
				output += `<span class=bracket>${lex.tx}</span>`
				break;
			case lex.types.num:
				output += `<span class=number>${lex.tx}</span>`
				break;
			case lex.types.str:
				output += `<span class=string>${lex.tx}</span>`
				break;
			case lex.types.id:
				if (keywords.includes(lex.tx)) {
					output += `<span class=keyword>${lex.tx}</span>`
					break;
				}else{
					output += `<span class=identifier>${lex.tx}</span>`
				} break;
			case lex.types.sym:
				if (lex.tx == "`") {
					const end = lex.find("`");
					output += parseTemplateString(lex.copy().fence(end.pk))
					lex.sync(end);
					break;
				}
			default:
				output += lex.tx;
				break;

		}
		lex.next();
	}

	lex.PARSE_STRING = true;
	return output;
}

function parseHTMLHEAD(lex) {
	let output = `<span class="html-tag">&lt;<span class=html-tag-name>${lex.n.tx}</span><span class=html-tag-body>`;

	lex.IWS = false;

	lex.next(); // [tag name]

	while (!lex.END && lex.tx != ">") {
		switch (lex.ty) {
			case lex.types.op:
				output += `<span class=operator>${lex.tx}</span>`
			break;
			case lex.types.str:
				output += `<span class=string>${lex.tx}</span>`
				break;
			case lex.types.num:
				output += `<span class=number>${lex.tx}</span>`
				break;
			case lex.types.ob:
				if (lex.tx == "(") {
					if (lex.pk.tx == "(") {
						output += parseBinding(lex.next().next());
					} else
						output += "&lpar;";
					break;
				}
			case lex.types.cb:
				if (lex.tx == ")") {

					output += "&rpar;";
					break;
				}
			default:
				output += lex.tx;
		}
		lex.next();
	}

	lex.next();

	return output + `</span>&gt;</span>`;
}


function parseWickScope(lex) {
	return parseString(lex).map(v => ("&nbsp;&nbsp;&nbsp;").repeat(v.l) + v.s).join("<br/>");
}

function parseString(lex, level = 0) {
	let output = [];
	//Asume start in html
	let STATE = {

	}
	lex.PARSE_STRING = true;
	lex.IWS = false;

	let temp_output = "";
	outer:
		while (!lex.END) {
			switch (lex.ty) {
				case lex.types.nl:
					if (temp_output.trim())
						output.push({ l: level, s: temp_output });
					temp_output = "";
					break;
				case lex.types.op:
					if (lex.tx == "<") {
						if (temp_output.trim())
							output.push({ l: level, s: temp_output });

						temp_output = "";

						lex.IWS = true;

						if (lex.pk.tx == "/")
						// Expecting close tag
						{
							lex.next().next();
							level--;
							output.push({ l: level, s: `<span class="html-tag">&lt;/<span class="html-tag-name">${lex.tx}</span>&gt;</span>` })
							lex.IWS = true;
							lex.next();
							break outer;
						} else
						// Expecting open tag
						{
							lex.IWS = true;
							const tag = lex.pk.tx;
							lex.IWS = false;
							output.push({ l: level, s: parseHTMLHEAD(lex) });
							if(tag == "script"){
								level++;
								const end = lex.find("</script>");
								output.slice().pop().s += "<span class=script-body>"
								output.push(...(lex.copy().fence(end).slice().split("/n").map(str=>({l:level,s:parseScript(new lex.constructor(str))}))))
								output.slice().pop().s += "</span>"
								lex.sync(end);
								output.push(...parseString(lex, level));
								level--;
							}else{
								lex.IWS = true;
								output.slice().pop().s += "<span class=html-body>"
								lex.next();
								level++;
								output.push(...parseString(lex, level));
								output.slice(-1).pop().s += "</span>"
								level--;
							}
						}

						break;
					}
				case lex.types.ob:
					if (lex.tx == "(") {
						if (lex.pk.tx == "(") {
							temp_output += parseBinding(lex.next().next());
						} else
							temp_output += "&lpar;";
						break;
					}
				case lex.types.cb:
					if (lex.tx == ")") {
						temp_output += "&rpar;";
						break;
					}
				default:
					temp_output += lex.tx;
			}
			lex.IWS = false;
			lex.next();
		}

	if (temp_output.trim())
		output.push({ l: level, s: temp_output });

	return output;
}