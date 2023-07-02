//Synchronous 
//the javaScript engine executes our program sequentially, one line at a time from 
//top to bottom in the exact order of the statements.

//1) instruction in synchronous code executes in a given sequence
//2) each operation waits for the previous operation to complete its execution
//3) most of the time javascript is used as synchronous code 

var a = 1;
var b= 2;
var c = a + b ;
console.log(a , b, c);
console.log (b);
console.log (c);


const name = "Kiran";
const greet = "Hello, my name is ${name}!";
console.log(greet);


function makeGreet(nameOne){
    return 'Hello, my name is ${nameOne}!';
}

const nameOne = "Kiran";
const greetOne = makeGreet(nameOne);
console.log(greetOne);


const someFunction = function () {
    console.log("Inside someFunction");
    console.log("Do Something");

};
console.log("Start");
someFunction();
console.log("End");



//-----------------------------------------------------------

//Asynchronous
//function running in parallel with other functions are colled asynchronous a good example is javaScrip setTimeout()
//Asynchronous is non-blocking architecture so the execution of the task inst's dependent on another.

//1) instruction in asynchronous code can execute in parallel
//2) next operation can occur while previous operation is still getting proccessed
//3) Asynchronous javaScript preferred in situation in which exectuction gets blocked indefinitely

console.log('First');
// set timeout for 2 seconds
setTimeout(() => console.log('second'),2000);
console.log('Third');


// Random Number Generator Without Promise

function generateRandom(min,max){
    return Math.ceil(Math.random() * (max - min ) + min);
}

//self-executing async arrow function.

(() => {
    const num = generateRandom(1,10);
    console.log(num)
})
();


//an example of synchronous in javaScript
const message = 'javaScript World';
const greeting = 'I Love ${message}';
console.log(greeting);


console.og("Execution started");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 3000);

console.log("Execution ended");







