function pageBreak(){
	console.log('-'.repeat(45))
}

console.log(`I think it will log undefined because foo is not in the scope where console.log is -- incorrect logged an error. if keyword let is removed bar is logged`)

/*
{
    let foo = 'bar';
}
  
console.log(foo);
*/

pageBreak()

console.log(`Constants are immutable so I believe it will continue to print 'Victor' or it will throw an error  -- it threw an error`)

const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

//NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

pageBreak()

console.log(`because we use the let keyword qux it doesn't reassign the global variable foo`)

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

pageBreak()

console.log(`I don't think it will produce an error because the const FOO are in two different scopes`)

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);