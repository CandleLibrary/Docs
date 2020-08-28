declare var _default: {
    type: string;
    hash: string;
    urls: string[];
    symbols: ({
        type: string;
        val: number;
        name: string;
        pos: number[];
    } | {
        type: string;
        val: string;
        pos: number[];
        name?: undefined;
    })[];
    states: ({
        pr: number;
        b: number;
        i: string;
        act: ((string | {
            b: number;
            s: number;
            n: number;
            sz: number;
            ac: any;
            st: string;
            sym: string;
            p: number;
        })[] | (string | {
            b: number;
            s: number;
            n: number;
            ac: any;
            st: string;
        })[])[];
        gt: any[];
        it: number[][];
    } | {
        pr: number;
        b: number;
        i: string;
        act: ((string | {
            b: number;
            s: number;
            n: number;
            ac: any;
            st: string;
            sym: string;
        })[] | (string | {
            b: number;
            s: number;
            n: number;
            ac: any;
            st: string;
            off: number;
            sym: string;
        })[] | (string | {
            b: number;
            s: number;
            n: number;
            ac: any;
            st: string;
        })[])[];
        gt: any[];
        it: number[][];
    } | {
        pr: number;
        b: number;
        i: string;
        act: ((string | {
            b: number;
            s: number;
            n: number;
            sz: number;
            ac: any;
            st: string;
            off: number;
            sym: string;
            p: number;
        })[] | (string | {
            b: number;
            s: number;
            n: number;
            ac: any;
            st: string;
            off: number;
            sym: string;
        })[] | (string | {
            b: number;
            s: number;
            n: number;
            ac: any;
            st: string;
        })[])[];
        gt: (number | {
            b: number;
            s: number;
            n: number;
            ac: any;
            st: string;
            sym: number;
        })[][];
        it: number[][];
    })[];
    grammar: {
        name: string;
        id: number;
        bodies: {
            sym: number[];
            length: number;
            pos: number[];
        }[];
        url: number;
    }[];
};
export default _default;
