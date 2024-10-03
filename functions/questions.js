//What does this code log to the console? Does executing the foo function affect the output? Why or why not?

console.log(`it will log the global variable 1. calling foo() doesn't affect the output because it's not reassigning bar it's intializing a local variable bar `)

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

pageBreak()

//What does the following code log to the console?
console.log(`the code will not log anything because the return comes before the console.log()'`)

function scream(words) {
    words = words + '!!!!';
    return;
    console.log(words);
  }
  
scream('Yipeee');

pageBreak() 

//In the code shown below, identify the following items:

console.log(
    'the function arguments - 2, 3, 4\n\
the function body -  let result = num1 * num2 * num3; return result;\n\
the function declaration - the entire function\n\
the function invocation - multiplyNumbers(2, 3, 4)\n\
the function name - multiplyNumbers\n\
the function parameters - num1 num2 num3\n\
the function return value - result\n\
the names of all variables in this program - multiplyNumbers num1 num2 num3 result product'
)

function multiplyNumbers(num1, num2, num3) {
    let result = num1 * num2 * num3;
    return result;
  }
  
let product = multiplyNumbers(2, 3, 4);

pageBreak()

//Without running the following code, what do you think it will output?
console.log(`the code will print bar Hello and qux will be undefined'`)

function foo(bar, qux) {
    console.log(bar);
    console.log(qux);
  }
  
foo('Hello');

pageBreak()
function pageBreak(){
	console.log('-'.repeat(45))
}