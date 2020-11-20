const stack = (DEPTH = 18) => {
    let stack = [];
    let head = null;
    let spt = 0;
    return (we, delta, wd) => {
        //console.log("*** STACK", stack, "HEAD", head, "SPT", spt)
        if (delta === 1) {
            stack.unshift(null)
        }
        if (delta === 3) {
            stack.shift()
        }
        if (we) {
            stack[0] = wd
        }
        return stack[0]; //TOS
    }
}

module.exports = stack