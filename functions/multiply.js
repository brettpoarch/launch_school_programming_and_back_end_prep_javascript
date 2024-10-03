let rlSync = require('readline-sync');

function getNums(prompt) {

    let number = rlSync.question(prompt);
    return number;
}

function multiply(num1, num2) {

    let product = num1 * num2;
    return product;

}

let firstNum = getNums('Please enter a number\n');
let secondNum = getNums('Please enter another number\n');

console.log(`${firstNum} * ${secondNum} = ${multiply(firstNum, secondNum)}`);

