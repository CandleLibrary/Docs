export default ((s,u,g)=>({
         fn : {}, 
/************** Maps **************/
    st:s,
    /* Types */ ty: {1:1,2:1,3:2,4:2,8:3,16:3,32:4,64:4,128:5,256:5,264:6,512:6,1025:7,2049:7,4097:8,8193:8,16385:9,32769:9,number:10,num:10,identifier:11,string:11,white_space:12,open_bracket:12,close_bracket:13,operator:13,symbol:14,new_line:14,data_link:15,number_bin:15,number_oct:16,number_hex:16,number_int:17,number_sci:17,number_flt:18,alpha_numeric:18,white_space_new_line:30,id:19,str:20,ws:20,ob:21,cb:21,op:22,sym:22,nl:23,dl:23,int:24,integer:24,bin:25,binary:25,oct:26,octal:26,hex:27,hexadecimal:27,flt:28,float:28,sci:29,scientific:29,any:31,keyword:32},
    /* Symbols To Inject into the Lexer */ sym : ["/*","*/","<!","--","```"],
    /* Symbol Lookup map */ lu : new Map([["num",1],["id",1],["alpha_numeric",2],["str",2],["ws",3],["ob",3],["cb",4],["op",4],["sym",5],["nl",5],["white_space_new_line",6],["dl",6],["binary",7],["octal",7],["hexadecimal",8],["integer",8],["scientific",9],["float",9],[1,10],[2,19],[4,20],[8,20],[16,21],[32,21],[64,22],[128,22],[256,23],[512,23],[1025,25],[2049,26],[4097,27],[8193,24],[16385,29],[32769,28],[3,18],[264,30],[200,31],[201,32],["/",47],[null,22],["/*",37],["*",48],["*/",40],["<!",41],["--",42],["\\",46],["[",49],["]",50],[":",51],[">",52],["```",53],[";",54],["README",55],["API",56],["MAIN_PAGE",57]]),
    /* States */ sts : [0,1,2,3,4,5,6,7,8,2,9,10,11,12,13,14,15,16,14,14,14,17,18,19,20,21,22,23,24,19,25,26,27,28,29,30,31,32,32,32,33,34,34,34,32,35,36,37,38,32,39,40,41,42,43,44,45,45,45,46,45,47,48,49,50,51,52].map(i=>s[i]),
    /* Fork Map */fm: [],
    /*Goto Lookup Functions*/ gt:g[0].map(i=>i>=0?u[i]:[]),
/************ Functions *************/
    /* Environment Functions*/ fns: [_=>({type:"multiline",preamble:_[1],content:_[2]}),_=>({type:"multiline",preamble:_[1]}),_=>(([..._[0],_[1]])),_=>([_[0]]),_=>(_[0].join("\n")),_=>(_[0]?_[0].slice()[0]=="*"?_[0].slice().slice(1):_[0].slice():""),_=>(_[1]),()=>(null),(_,$,A,B)=>({type:"fragment",preamble:_[1],content:_[3],pos:B}),(_,$,A,B)=>({type:"fragment",preamble:_[1],pos:B}),_=>(_[0]),_=>(_[0].slice()),(_,$,A,B)=>(B),_=>({activated:true,usage:_[0],specifier:_[1]}),_=>({activated:true,specifier:_[0]}),_=>({activated:true,usage:_[0],specifier:null}),()=>({activated:true,specifier:null}),_=>(([..._[0],_[2]]))],
    /* State Action Functions */ sa : [e=>42,e=>26,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),9),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),2059),e=>34,e=>58,e=>50,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),8203),(a,b,c,e,f,g,p)=>(p.rn(2,a,b,c,e,f),8211),(a,b,c,e,f,g,p)=>(p.rn(3,a,b,c,e,f),4123),e=>82,(a,b,c,e,f,g,p)=>(p.rv(g[7],1,0,a,b,c,e,f),18443),e=>122,e=>98,e=>186,e=>178,e=>154,e=>146,e=>162,(a,b,c,e,f,g,p)=>(p.rv(g[6],2,0,a,b,c,e,f),18451),e=>138,(a,b,c,e,f,g,p)=>(p.rv(g[7],2,0,a,b,c,e,f),18451),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),49163),(a,b,c,e,f,g,p)=>(p.rv(g[14],1,0,a,b,c,e,f),53259),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),69643),(a,b,c,e,f,g,p)=>(p.rv(g[15],1,0,a,b,c,e,f),53259),(a,b,c,e,f,g,p)=>(p.rv(g[6],3,0,a,b,c,e,f),18459),(a,b,c,e,f,g,p)=>(p.rv(g[13],2,0,a,b,c,e,f),53267),e=>202,(a,b,c,e,f,g,p)=>(p.rn(2,a,b,c,e,f),51219),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),63499),e=>226,e=>234,(a,b,c,e,f,g,p)=>(p.rv(g[3],1,0,a,b,c,e,f),67595),(a,b,c,e,f,g,p)=>(p.rv(g[6],3,0,a,b,c,e,f),49179),(a,b,c,e,f,g,p)=>(p.rv(g[17],3,0,a,b,c,e,f),67611),e=>306,e=>298,e=>314,e=>394,e=>370,e=>362,e=>426,e=>330,e=>338,e=>346,(a,b,c,e,f,g,p)=>(p.rv(g[1],3,0,a,b,c,e,f),6171),(a,b,c,e,f,g,p)=>(p.rv(g[3],1,0,a,b,c,e,f),12299),(a,b,c,e,f,g,p)=>(p.rv(g[5],1,0,a,b,c,e,f),16395),e=>386,(a,b,c,e,f,g,p)=>(p.rv(g[3],1,0,a,b,c,e,f),45067),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),40971),(a,b,c,e,f,g,p)=>(p.rv(g[11],1,0,a,b,c,e,f),40971),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),71691),e=>402,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),20491),(a,b,c,e,f,g,p)=>(p.rv(g[0],4,0,a,b,c,e,f),6179),(a,b,c,e,f,g,p)=>(p.rv(g[5],2,0,a,b,c,e,f),16403),e=>410,(a,b,c,e,f,g,p)=>(p.rn(3,a,b,c,e,f),40987),(a,b,c,e,f,g,p)=>(p.rv(g[12],1,0,a,b,c,e,f),47115),e=>482,e=>458,e=>466,e=>450,e=>474,(a,b,c,e,f,g,p)=>(p.rv(g[2],2,0,a,b,c,e,f),45075),(a,b,c,e,f,g,p)=>(p.rv(g[3],1,0,a,b,c,e,f),59403),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),57355),e=>498,e=>514,(a,b,c,e,f,g,p)=>(p.rn(2,a,b,c,e,f),57363),(a,b,c,e,f,g,p)=>(p.rv(g[2],2,0,a,b,c,e,f),59411),(a,b,c,e,f,g,p)=>(p.rv(g[12],3,0,a,b,c,e,f),61467),(a,b,c,e,f,g,p)=>(p.rv(g[4],1,0,a,b,c,e,f),14347),(a,b,c,e,f,g,p)=>(p.rv(g[2],2,0,a,b,c,e,f),12307)],
    /* Get Token Function  */ gtk:function getToken(l, SYM_LU, IGNORE_KEYWORDS = false) {    if (l.END)        return 0;    if ((l.ty & 1)) {        if (!IGNORE_KEYWORDS && SYM_LU.has(l.tx))            return SYM_LU.get(l.tx);        switch (l.ty) {            case 16385:                return 29;            case 4097:                return 27;            case 2049:                return 26;            case 1025:                return 25;            case 32769:                return 28;            case 8193:                return 24;            default:            case 1:                return 10;        }    }    switch (l.ty) {        case 2:            if (!IGNORE_KEYWORDS && SYM_LU.has(l.tx))                return 32;            return 19;        case 4:            return 20;        case 256:            return 23;        case 8:            return 20;        case 512:            return 23;        default:            return SYM_LU.get(l.tx) || SYM_LU.get(l.ty);    }},
}))(...("-l;0;-3;0;-e;2;-a;4&6;-k;0;-3;0&8;-k;0;-3;0&-o;0;-o;a&-l;0;-3;0;-8;c&-l;0;-3;e;-p;g&-l;0;-3;0;-p;i&k;-k;0;-3;0&-l;0;-3;0;-p;m&-b;o;-9;q;0;-2;o;s;-8;o;-9;o;-6;o;-3;u;-2;w;-2;o;-2;y;10;12&-b;14;-9;14;0;-2;14;16;-8;14;-9;14;-6;14;-7;14;-2;1ell&-b;18;-9;18;0;-2;18;0;-8;18;-9;18;-6;18;-7;18;-2;1elp&-b;1a;-9;1a;0;-2;pbj;-8;1a;-9;1a;-6;1a;-5;1a;-2;1a;-2;1elr&-b;1c;-9;1c;0;-2;pbl;-8;1c;-9;1c;-6;1c;-7;1c;-2;1elt&-b;1e;-9;1e;0;-2;pbn;-8;1e;-9;1e;-6;1e;-4;pbn;-2;2t6b&-b;1g;-9;1g;0;-2;pbp;-8;1g;-9;1g;-6;1g;-5;w;-2;1g;-2;1elx&-b;1i;-9;1i;0;-2;1i;0;-8;1i;-9;1i;-6;1i;-7;1i;-2;1elz&-b;1k;-9;1k;0;-2;pbt;-8;1k;-9;1k;-6;1k;-7;1k;-2;1em1&-k;1m;0;-3;0&-k;q;0;-3;0;-w;y;10;12&-b;1o;-9;1o;0;-2;pbx;-8;1o;-9;1o;-6;1o;-7;1o;-2;1em5&-b;1q;-9;1q;0;-2;pbz;-8;1q;-9;1q;-6;1q;-7;1q;-2;1em7&-l;0;-3;0;-r;1s;-4;1u&-l;0;-3;0;-r;1w;-4;1w&-b;1y;-9;1y;0;-2;pc7;-8;1y;-9;1y;-6;1y;-5;1y;-2;1y;-2;1emf&-l;0;-3;0;-r;20;-4;20&-b;22;-9;24;0;-2;26;0;-8;28;-9;2a;-6;2c;-7;2e;-2;2g;2i;2k&-l;0;-3;0;-h;2a&2m;-k;0;-3;0&-b;2o;-9;2o;0;-2;2o;0;-8;2o;-9;2o;-6;2o;-7;2o;-2;1en5&-b;2q;-9;2q;0;-2;2q;2s;-8;2q;-9;2q;-6;2q;-7;2q;-2;1en7&-b;2u;-9;2u;0;-2;pd3;-8;2u;-9;2u;-6;2u;-7;2u;-2;1enb&-b;2w;-9;2w;0;-2;pd5;-8;2w;-9;2w;-6;2w;-7;2w;-2;1end&-b;2y;-9;2y;0;-2;pd7;-8;2y;-9;2y;-6;2y;-7;2y;-2;1enf&-b;30;-9;30;0;-2;pd9;-8;30;-9;30;-6;30;-7;30;-2;1enh&-b;2w;-9;2w;0;-2;pd5;-8;2w;-9;2w;-6;2w;32;-6;2w;-2;1end&34;-k;0;-3;0&36;-k;0;-3;0&-b;38;-9;38;0;-2;38;0;-8;38;-9;38;-6;38;-7;38;-2;1enp&-l;0;-3;0;-p;3a&-b;3c;-9;3c;0;-2;pdl;-8;3c;-9;3c;-6;3c;-7;3c;-2;1ent&-b;22;-9;24;0;-2;26;3e;-8;28;-9;3e;-6;2c;-7;2e;-2;2g;2i;2k&-b;3g;-9;3i;0;-2;3k;0;-8;3m;-f;3o&-b;3q;-9;3q;0;-2;pdz;-8;3q;-9;3q;-6;3q;-7;3q;-2;1eo7&-b;3s;-9;3s;0;-2;3s;0;-8;3s;-f;3s;-7;3s&-b;3u;-9;3u;0;-2;3u;0;-8;3u;-f;3u;-7;3u&-l;0;-3;0;-u;3w&-b;3g;-9;3i;0;-2;3k;0;-8;3m;-f;3o;-7;3y&-b;40;-9;pe9;-2;pe9;-8;40;-f;40;-7;40&-b;42;-9;42;0;-2;42;0;-8;42;-f;42;-7;42&-b;44;-9;44;0;-2;ped;-8;44;-9;44;-6;44;-7;44;-2;1eol&-b;22;-9;24;0;-2;26;0;-8;28;-9;46;-6;2c;-7;2e;-2;2g;2i;2k&-b;48;-9;48;0;-2;48;0;-8;48;-9;48;-6;48;-7;48;-2;1eop|-2;2;4;i;g&-a;1q&-p;w;s;m;-8;q&-q;16&-w;1c&-y;1g;1i&-z;1o&-7;3m;1s;1w;-2;1u;-a;20;-2;2w;1y;-7;28;-5;2g&-b;2m&-l;30;-a;28;-5;2g&-t;32;3e&-t;3i&-9;3o;-c;20;-2;2w;1y;-7;28;-5;2g|0;-8;2;-2;4;-6;6;-6;8;a;-6;c;-2;e;g;-k;i;k;-8;m;-4;o;-2").split("|").map(e=>e.split("&")).map(a => a.map(s => s.split(";").map(s=>parseInt(s,36))).map(s=>s.flatMap(d=>d<0?(new Array(-d-1)).fill(-1):(new Array(((d >>> 15) & 0x3FF) + 1)).fill((d >>> 1) & 0x3FFF)))));