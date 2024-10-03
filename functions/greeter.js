let rlSync = require('readline-sync');
//let name = rlSync.question(`What is your name\n`);

//console.log(`Hello ${name}`);
function greeter(prompt) {
    let name = rlSync.question(prompt);
    return name   
}

let fName = greeter('What is yuor first name?\n');
let lName = greeter('What is yuor last name?\n');

console.log(`Hello ${fName} ${lName}`);