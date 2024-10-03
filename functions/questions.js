//What does this code log to the console? Does executing the foo function affect the output? Why or why not?

console.log(`it will log the global variable 1. calling foo() doesn't affect the output because it's not reassigning bar it's intializing a local variable bar `)

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);