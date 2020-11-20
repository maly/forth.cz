// James Bowman's J1 CPU in JavaScript, emulated

const WIDTH = 16;
const WMASK = 2 ** WIDTH - 1;



const stack = require("./stack2.js")

let dstack = stack(15);
let rstack = stack(17);

console.log(dstack(1, 1, 153));
console.log(dstack(1, 1, 351));
console.log(dstack(1, 0, 333))
console.log(dstack(0, 0, 0))
console.log(dstack(0, 0, 0))
console.log(dstack(0, 3, 0))
console.log(dstack(0, 3, 0))
console.log(dstack(0, 3, 0))
console.log(dstack(0, 3, 0))