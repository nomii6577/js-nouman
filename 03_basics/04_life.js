// Immediately Invoked Function Expression (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
}) (); // semi colon must be required for IIFE

(() => {
    console.log(`DB CONNECTED TWO`);
}) ();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) (`Nouman`);

// ++++++++++++++++++++++++ Javascript Execution Context    +++++++++++++++++++++++++++

//  Global Execution Context
//  Function Execution Context
//  Eval Execution Context

// Memory Creation Phase
// Execution Phase

let val1 = 10
let val2 = 5
function addNum(num1, num2) {
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

// Steps for above function
// **   1 - Global Execution => this allocation

// **   2 - Memory Phase
// val1 => undefined
// val2 => undefined
// addNum => definition
// result1 => undefined
// result2 => undefined

// **   Execution Phase
// val1 => 10
// val2 => 5
// 

