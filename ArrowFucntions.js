//Arrow Function
// Arrow Function were introduced in ES6.
// Arrow function allow us to write shorter function syntax:

//Syntax
let myFUnction = (arg1, arg2,) => {
    statement(s)
}

let myFunction = (a,b) => a /b;

//before Arrow

hello = function (){
 return "Hello World";
}


// With Arrow Function 
 
hello = () => {
    return "Hello World";
}

// Arrow Function Return value by default

hello = () => "Hello World" ;

// Arrow Function with Parameters 

hello = (val) => "Hello" + val;

//Arrow Function Without Parantheses

hello = val => "Hello" + val;

// strucutre of arrow function 
// Example of arrow functions

() =>1;

v=> v+1;

(a,b) => a+b;
()=> {
    alert("foo");
};


//Arrow Function with One Argument

let greet = x => console.log(x);
greet("Hello"); // Hello

//Arrow Function as an Expression

let age = 18;
let welcome = (age < 18) ?
() => console.log('Baby'):
() => console.log('Adult');

welcome(); 

// Example
let sum = (a,b) => {
    let result = a + b ;
    return result;
}
let result1 = sum (5,7);
console.log(result1)


//default parameters
const test = (a= 'a',b='b', c= 'c') => {
    return a+b+c
}
console.log (test('A','B','C')) //ABC
console.log(test('A','B')) //ABc
console.log(test('A')) //Abc


// templete string 
// Do not use template string:

var name = 'your name is ' + first + '' + last +
''

// use template string 
var name = 'your name is ${first} ${last}'

//Structure Assignment

var foo = ["one","two", "three", "four"];

var[one, two, three] = foo;
console.log(one); //"one"
console.log(two);//"two"
console.log(three); //"three"

//If you want to ignore some values, tou can get the values you want as follos

var [first, , , last] = foo;
console.log(first); "one"
console.log(last); "four"


//you can write like this 
var a,b; //Declare variables first

[a,b] = [1,2];
console.log(a); //3
console.log(b); //1

//Ex :

var a = 1;
var b = 3;

[a,b] = [b,a];
console.log(a); //3
console.log(b) //1


//structure assignment of object

// const student = {
//     name:'Kiran',
//     age : '24',
//     city: 'Sambhaji Nagar'
// };

// const {name,age,city} = student;
// console.log(name);  // "Ming"
// console.log(age); //"18"
// console.log(city); // "Sambhaji Nagar"


//Spread Operator

var arr1 = [0,1,2];
var arr2 = [3,4,5];
var vrr3 = [...arr1,...arr2]; // Append all elemtnd in arr2 after arr1 and return 
//Equate to 
var arr4 = arr1.concat(arr2);

var obj1 = {foo: 'bar', x:42};
var obj2 = {foo: 'baz',y:13};

var cloneObj = {...obj1};
//clone object : {foo: 'bar', x: 42}

var mergedObj = {...obj1, ...obj2};
//Merged object : {foo: 'Baz', x:42, y:13}



//new feture of ES7 (2016)

//1) The array includes() method is used to determine whether an array contains a specified value.
//if it does, it returns true, otherwise it returns false.

//2) **b index operator, which is the same as Math.pow(a,b)

//includes()
//The includes() functions is used to determine whether an array contains a specified value.
// if it does it returns true.otherwise it returns false.

let arr = ['react','angular', 'vue'];

if(arr.includes('react')) {
    console.log('react existance');
}

//index operator

//in ES7, the exponential p[erator is introduced and the result is equivalant to Math.pow(...)

console.log (Math.pow(2,10)) // Outout 1024