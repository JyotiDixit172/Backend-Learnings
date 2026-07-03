// REPL - Read, Evaluate, Print, Loop
// A simple example of using Node.js REPL module

// R - Read the user input
// E - Evaluate the user input
// P - Print or output the result
// L - return and wait wait for new input

// So this REPL environment allows us to execute any JS expression, any JS code outside of the browser.

/* 
JS automatically detects data types. It's dynamically typed:
variables can hold any data type without declaration.
The type is inferred from the assigned value.
Types can be changed during runtime.
This above dynamic typing can be verified using typeof operator.
*/ 

// User object = {property:value}
let user = {name:"John", age:28}
console.log(user.name);
console.log(user.age);


//  Why don't we use REPL for development purpose ?

/* 
In terminal, during a single REPL session, all the variables, objects created during that time are
stored during that session only, and gets flushed out in case of cntrl+c, which means 
we are out of node.js environment
*/

//  _ (underscore) - is a special variable which stores the result of the previous expression.
