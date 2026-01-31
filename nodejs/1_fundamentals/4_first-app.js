// write a js code, whcih can be executed by node.js

// 1. simple print to console in js
// run in terminal like this : node filename

// console.log("Hello form Node.js !!")
// console.log("Hello from Node.js!!");


// 2. write some outputs to a file instead of the console.
//  Use the built in finctnalities node.js offers -> FILE SYSTEM functionality.
//  Enables us to work with files System.
//  import that function into that file to let node that we are using it in our current file.

// syntax: require( 'fs' -> module) | require is a function | 
// 'fs' -> module -> node's core modules shipping toegther with nodejs

// stores the file system functionality in a constant variable.
const fs = require('fs');

// use this file system to call -> writeFileSync():  Method made avaible by this fs object for importing.
// And this method, will write a file to our harddrive.
//fs module's method -> writtFileSync(1st argument: File path, 2nd Argument: text)
fs.writeFileSync('hello.txt', 'Hello from node.js again !!'); 


// run: node file name -> hello.txt will be created with the specified text given.