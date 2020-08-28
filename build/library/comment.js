export default ((s, u, g) => ({
    fn: {},
    /************** Maps **************/
    st: s,
    /* Types */ ty: { 1: 1, 2: 1, 3: 2, 4: 2, 8: 3, 16: 3, 32: 4, 64: 4, 128: 5, 256: 5, 264: 6, 512: 6, 1025: 7, 2049: 7, 4097: 8, 8193: 8, 16385: 9, 32769: 9, number: 10, num: 10, identifier: 11, string: 11, white_space: 12, open_bracket: 12, close_bracket: 13, operator: 13, symbol: 14, new_line: 14, data_link: 15, number_bin: 15, number_oct: 16, number_hex: 16, number_int: 17, number_sci: 17, number_flt: 18, alpha_numeric: 18, white_space_new_line: 30, id: 19, str: 20, ws: 20, ob: 21, cb: 21, op: 22, sym: 22, nl: 23, dl: 23, int: 24, integer: 24, bin: 25, binary: 25, oct: 26, octal: 26, hex: 27, hexadecimal: 27, flt: 28, float: 28, sci: 29, scientific: 29, any: 31, keyword: 32 },
    /* Symbols To Inject into the Lexer */ sym: ["*/", "/*"],
    /* Symbol Lookup map */ lu: new Map([["num", 1], ["id", 1], ["alpha_numeric", 2], ["str", 2], ["ws", 3], ["ob", 3], ["cb", 4], ["op", 4], ["sym", 5], ["nl", 5], ["white_space_new_line", 6], ["dl", 6], ["binary", 7], ["octal", 7], ["hexadecimal", 8], ["integer", 8], ["scientific", 9], ["float", 9], [1, 10], [2, 19], [4, 20], [8, 20], [16, 21], [32, 21], [64, 22], [128, 22], [256, 23], [512, 23], [1025, 25], [2049, 26], [4097, 27], [8193, 24], [16385, 29], [32769, 28], [3, 18], [264, 30], [200, 31], [201, 32], ["/", 34], [null, 22], ["/*", 37], ["[", 42], ["]", 43], [":", 44], ["*", 45], ["*/", 46], [";", 47], ["README", 48], ["API", 49], ["MAIN_PAGE", 50]]),
    /* States */ sts: [0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 19, 19, 20, 21, 19, 22, 23, 24, 25, 14, 26, 27, 28, 29, 30, 31, 32, 33, 33, 33, 33, 33, 34, 34, 34, 35, 36, 37, 38, 39, 40, 41].map(i => s[i]),
    /* Fork Map */ fm: [],
    /*Goto Lookup Functions*/ gt: g[0].map(i => i >= 0 ? u[i] : []),
    /************ Functions *************/
    /* Environment Functions*/ fns: [_ => ({ type: "multiline", preamble: _[1], content: _[2] }), _ => ({ type: "multiline", preamble: _[1] }), _ => (([..._[0], _[1]])), _ => ([_[0]]), _ => (_[0].join("\n")), _ => (_[0] ? _[0].slice()[0] == "*" ? _[0].slice().slice(1) : _[0].slice() : ""), (_, $, A, B) => (B), _ => (_[1]), _ => ({ activated: _[0], usage: _[1], specifier: _[2] }), _ => ({ activated: _[0], specifier: _[1] }), _ => ({ activated: _[0], usage: _[1], specifier: null }), _ => ({ activated: _[0], specifier: null }), _ => (([..._[0], _[2]]))],
    /* State Action Functions */ sa: [e => 18, e => 26, (a, b, c, e, f, g, p) => (p.rn(1, a, b, c, e, f), 9), e => 34, e => 42, (a, b, c, e, f, g, p) => (p.rn(1, a, b, c, e, f), 8203), e => 50, (a, b, c, e, f, g, p) => (p.rn(2, a, b, c, e, f), 8211), (a, b, c, e, f, g, p) => (p.rn(3, a, b, c, e, f), 4123), (a, b, c, e, f, g, p) => (p.rn(1, a, b, c, e, f), 2059), e => 82, (a, b, c, e, f, g, p) => (p.rv(g[11], 1, 0, a, b, c, e, f), 30731), e => 178, e => 90, e => 122, e => 130, e => 162, e => 202, e => 170, (a, b, c, e, f, g, p) => (p.rv(g[11], 2, 0, a, b, c, e, f), 30739), (a, b, c, e, f, g, p) => (p.rn(1, a, b, c, e, f), 26635), (a, b, c, e, f, g, p) => (p.rv(g[10], 2, 0, a, b, c, e, f), 30739), e => 146, (a, b, c, e, f, g, p) => (p.rv(g[9], 2, 0, a, b, c, e, f), 30739), e => 154, e => 210, (a, b, c, e, f, g, p) => (p.rv(g[8], 3, 0, a, b, c, e, f), 30747), e => 218, (a, b, c, e, f, g, p) => (p.rv(g[10], 3, 0, a, b, c, e, f), 30747), (a, b, c, e, f, g, p) => (p.rv(g[9], 3, 0, a, b, c, e, f), 30747), (a, b, c, e, f, g, p) => (p.rn(1, a, b, c, e, f), 40971), (a, b, c, e, f, g, p) => (p.rv(g[3], 1, 0, a, b, c, e, f), 38923), e => 234, e => 242, (a, b, c, e, f, g, p) => (p.rn(1, a, b, c, e, f), 34827), (a, b, c, e, f, g, p) => (p.rv(g[8], 4, 0, a, b, c, e, f), 30755), (a, b, c, e, f, g, p) => (p.rn(2, a, b, c, e, f), 28691), (a, b, c, e, f, g, p) => (p.rv(g[7], 3, 0, a, b, c, e, f), 26651), (a, b, c, e, f, g, p) => (p.rv(g[12], 3, 0, a, b, c, e, f), 38939), e => 314, e => 306, e => 322, e => 338, e => 370, e => 346, e => 354, e => 362, (a, b, c, e, f, g, p) => (p.rv(g[1], 3, 0, a, b, c, e, f), 6171), (a, b, c, e, f, g, p) => (p.rv(g[3], 1, 0, a, b, c, e, f), 12299), (a, b, c, e, f, g, p) => (p.rv(g[5], 1, 0, a, b, c, e, f), 16395), e => 386, (a, b, c, e, f, g, p) => (p.rv(g[3], 1, 0, a, b, c, e, f), 22539), (a, b, c, e, f, g, p) => (p.rn(1, a, b, c, e, f), 18443), (a, b, c, e, f, g, p) => (p.rn(1, a, b, c, e, f), 43019), (a, b, c, e, f, g, p) => (p.rn(1, a, b, c, e, f), 32779), (a, b, c, e, f, g, p) => (p.rv(g[0], 4, 0, a, b, c, e, f), 6179), (a, b, c, e, f, g, p) => (p.rv(g[5], 2, 0, a, b, c, e, f), 16403), (a, b, c, e, f, g, p) => (p.rv(g[6], 1, 0, a, b, c, e, f), 24587), (a, b, c, e, f, g, p) => (p.rv(g[2], 2, 0, a, b, c, e, f), 22547), (a, b, c, e, f, g, p) => (p.rv(g[4], 1, 0, a, b, c, e, f), 14347), (a, b, c, e, f, g, p) => (p.rv(g[2], 2, 0, a, b, c, e, f), 12307)],
    /* Get Token Function  */ gtk: function getToken(l, SYM_LU, IGNORE_KEYWORDS = false) { if (l.END)
        return 0; if ((l.ty & 1)) {
        if (!IGNORE_KEYWORDS && SYM_LU.has(l.tx))
            return SYM_LU.get(l.tx);
        switch (l.ty) {
            case 16385: return 29;
            case 4097: return 27;
            case 2049: return 26;
            case 1025: return 25;
            case 32769: return 28;
            case 8193: return 24;
            default:
            case 1: return 10;
        }
    } switch (l.ty) {
        case 2:
            if (!IGNORE_KEYWORDS && SYM_LU.has(l.tx))
                return 32;
            return 19;
        case 4: return 20;
        case 256: return 23;
        case 8: return 20;
        case 512: return 23;
        default: return SYM_LU.get(l.tx) || SYM_LU.get(l.ty);
    } },
}))(...("-l;0;-3;0;-b;2;-3;4&6;-k;0;-3;0&-o;0;-b;8&-l;0;-3;a;-m;c&-l;0;-3;0;-8;e&-l;0;-3;0;-m;g&i;-k;0;-3;0&k;-k;0;-3;0&-l;0;-3;0;-m;m&-b;o;-9;q;0;-2;o;s;-8;o;-b;u;-2;w;-2;o;-2;y;10;12&-b;14;-9;14;0;-2;14;0;-8;14;-f;14;-2;1ell&-b;16;-9;16;0;-2;pbf;-8;16;-d;16;-2;16;-2;1eln&-b;18;-9;18;0;-2;18;1a;-8;18;-d;w;-2;18;-2;1elp&-b;1c;-9;1c;0;-2;1c;1e;-8;1c;-f;1c;-2;1elt&-k;q;0;-3;0;-p;y;10;12&-k;1g;0;-3;0&-b;1i;-9;1i;0;-2;1i;1k;-8;1i;-f;1i;-2;1elz&-b;1m;-9;1m;0;-2;1m;0;-8;1m;-f;1m;-2;1em3&-b;1o;-9;1o;0;-2;1o;0;-8;1o;-f;1o;-2;1em5&-b;1q;-9;1q;0;-2;pbz;-8;1q;-c;pbz;-2;2t6n&-l;0;-3;0;-k;1s;-4;1s&-l;0;-3;0;-k;1u;-4;1w&-b;1y;-9;1y;0;-2;pc7;-8;1y;-f;1y;-2;1emf&-b;20;-9;20;0;-2;20;0;-8;20;-f;20;-2;1emh&-b;22;-9;22;0;-2;pcb;-8;22;-f;22;-2;1emj&-b;24;-9;24;0;-2;pcd;-8;24;-d;24;-2;24;-2;1eml&-l;0;-3;0;-k;26;-4;26&-b;28;-9;2a;0;-2;2c;0;-8;2e;-e;0;2g;-2;2i;2k;2m&-l;0;-3;0;-n;2g&2o;-k;0;-3;0&-b;2q;-9;2q;0;-2;2q;0;-8;2q;-f;2q;-2;1en7&-b;2s;-9;2s;0;-2;2s;2u;-8;2s;-f;2s;-2;1en9&-b;2w;-9;2w;0;-2;pd5;-8;2w;-f;2w;-2;1end&-b;2y;-9;2y;0;-2;pd7;-8;2y;-f;2y;-2;1enf&-b;30;-9;30;0;-2;pd9;-8;30;-f;30;-2;1enh&32;-k;0;-3;0&34;-k;0;-3;0&-b;36;-9;36;0;-2;36;0;-8;36;-f;36;-2;1enn&-b;28;-9;2a;0;-2;2c;38;-8;2e;-f;38;-2;2i;2k;2m&-b;3a;-9;3a;0;-2;pdj;-8;3a;-f;3a;-2;1enr&-b;28;-9;2a;0;-2;2c;0;-8;2e;-e;0;3c;-2;2i;2k;2m&-b;3e;-9;3e;0;-2;3e;0;-8;3e;-f;3e;-2;1env|-2;2;e;g;i&-g;1s&-e;q;s;-6;o&-f;y&-k;1c;1a&-i;1k&-l;1q&-7;2u;1u;1y;22;-2;2q;20;-4;1w;-5;2a&-h;2m&-a;2s;-c;2a&-9;2w;22;-2;2q;20;-9;2a|0;-9;2;4;-3;6;-2;8;a;-e;c;-2;e;g;-g;i;-2;k;-2").split("|").map(e => e.split("&")).map(a => a.map(s => s.split(";").map(s => parseInt(s, 36))).map(s => s.flatMap(d => d < 0 ? (new Array(-d - 1)).fill(-1) : (new Array(((d >>> 15) & 0x3FF) + 1)).fill((d >>> 1) & 0x3FFF)))));
//# sourceMappingURL=comment.js.map