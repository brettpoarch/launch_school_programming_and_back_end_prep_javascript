function pageBreak(){
	console.log('-'.repeat(45))
}

var fName = 'Brett';
var lName = 'Poarch';

var fullName = `${fName} ${lName}`;
console.log(fullName);

pageBreak()

let num = 4936

let ones = num % 10
console.log(ones)

num = (num - ones) / 10

let tens = num % 10
console.log(tens)

num = (num - tens) / 10

let hundreds = num % 10
console.log(hundreds)

let thousands = (num - hundreds) / 10
console.log(thousands)

pageBreak()

console.log(typeof 'true')
console.log(typeof false)
console.log(typeof 1.5)
console.log(typeof 2)
console.log(typeof undefined)
console.log(typeof { foo: 'bar'})

pageBreak()

console.log('\'5\' + 10  printws 510 because 5 is a string so the equation is coerced into a string and the strings are concatinated')

pageBreak()

console.log(Number('5') + 10)

pageBreak()

let number = (5 + 10);

console.log(`The value of 5 + 10 is ${number}`)

pageBreak()

console.log('I think we\ll get undefined when we try to access a an index of an array that doesn\'t exist')

let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // will this result in an error?

pageBreak()

let petNames = [
    'asta',
    'butterscotch',
    'pudding',
    'neptune',
    'darwin',
]

console.log(petNames)

pageBreak()

let petNamesObj = {
    'asta' : 'dog',
    'butterscotch' : 'cat',
    'pudding' : 'cat',
    'neptune' : 'fish',
    'darwin' : 'lizard',
}

console.log(petNamesObj)

pageBreak()

console.log('foo === Foo will be false')
console.log('foo' === 'Foo')

pageBreak()

console.log('it\'ll evaluate to 3')
console.log(parseInt('3.1415'))

pageBreak()

console.log('I think it\'ll evaluate to false because the strings will be coerced to numbers')
console.log('12' < '9')