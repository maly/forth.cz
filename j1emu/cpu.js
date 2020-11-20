//environment

let tos = null;

let exception = (pars...) => {
    console.log("EXCEPTION", pars...)
}

let dw = exception
let dr = exception
let cw = exception
let cr = exception

let pc = null;

let init = (dwn, drn, cwn, crn) => {
    pc = 0
    dw = dwn
    dr = drn
    cw = cwn
    cr = crn
}

let dstack = {
    d: [],
    push: (n) => d.unshift(n),
    pop: () => d.shift(),
    val: () => d[0],
    setval: (n) =>

}

let rstack = {
    d: [],
    push: (n) => d.unshift(n),
    pop: () => d.shift(),
    val: () => d[0]
}


let step = () => {
    let instr = cr(pc++)

    //decoder
    let ix = (instr >> 13) & 3
    if (instr & 0x8000) {
        //literal
        tos = instr & 0x7FFF
    } else if (ix = 0) { //jump
        pc = instr & 0x1fff
    } else if (ix = 1) { //jumpc
        if (dstack.pop()) pc = instr & 0x1fff
    } else if (ix = 2) { //call
        rstack.push(pc)
        pc = instr & 0x1fff
    } else if (ix = 3) { //alu
        //op
        let op = (instr >> 8) & 15
        switch (op) {
            case 0:
                break;
            case 1:
                tos = dstack.val();
                break;
            case 2:
                tos = tos + dstack.pop();
                if (tos > 65535) tos = tos - 65536
                break;
            case 3:
                tos = tos & dstack.pop();
                break;
            case 4:
                tos = tos | dstack.pop();
                break;
            case 5:
                tos = tos ^ dstack.pop();
                break;
            case 6:
                tos = tos ^ 0xffff;
                break;
            case 7:
                tos = (tos == dstack.pop()) ? 0xffff : 0;
                break;
            case 8:
                tos = (tos < dstack.pop()) ? 0xffff : 0;
                break;
            case 9:
                tos = dstack.pop() << tos;
                break;
            case 10:
                tos = tos - 1;
                if (tos < 0) tos = 65536 + tos
                break;
            case 11:
                tos = rstack.val()
                break;
            case 12:
                tos = tos - dstack.pop()
                if (tos < 0) tos = 65536 + tos
                break;

        }
        let func = (instr >> 4) & 7
        switch (func) {
            case 1:
                if (instr & 3 == 1) {
                    dstack.push(tos)
                } else if (instr & 3 === 0) {
                    dstack.setval(tos)
                }
                break;
        }
    }
}

module.exports = {
    init,
    step
}