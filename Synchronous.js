//Synchronous 
//the javaScript engine executes our program sequentially, one line at a time from 
//top to bottom in the exact order of the statements.


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



//-----------------------------------------------------------

//Asynchronous
//function running in parallel with other functions are colled asynchronous a good example is javaScrip setTimeout()
//Asynchronous is non-blocking architecture so the execution of the task inst's dependent on another.

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


