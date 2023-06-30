//Function 
//function is group of code designed to perform a perticular task .
//function can be called anywhere in you program. 

//syntax

function functionName([arg1, arg2]){
    //code to be excuted 
}

function msg() {
alert("Hello")
}

// function with return value 
// we can call function that return a value and use it in out program.

function getinfo(){
    return "HEllo JavaScript";
}
console.log(getinfo());


function myFunction (g1,g2){
    return g1 * g2 ;
}
console.log(value);

//-----------------------------------------------------------
//Function Expression
// we can use function expression is used to define function inside any expression.
//the function expression allows us to create an anonymous function that dosen't have any function name which is the main deffrence between function expression and function decleation

// syntax

//function functionName(a,b) {statments return(z)};

// syntax for function = function (a,b) {
   // statements ...... return (c);
//}

letcalSub = function (x,y){
    let z =x -y;
    return z;
}
console.log("substraction : " + calsub(7,4));

//multi

let calMul = function Mul(x,y){
    let z = x * y ; 
    return z;
}
console.log("Multiplication : " + calMul(7,4));

//----------------------------------
// the syntax that we used before is called a function declaration
function sayHi(){
    alert("Hello");
}

//it allows us to create a new function in the middle of any expression 
let sayHi = function() {
    alert("Hello");
};


//JavaScript Arrow Function 

//Arrow function were introduced in ES6
//Arrow function allow us to write shorter function syntax 

let myFunction = (a,b) => a * b ; 

//Arrow Function 
hello = () => {
    return "Hello World !";
}

//Arrow Function Return Value By Default

hello = () => "Hello World"; 

// Arrow Function with parameter 
hello = (val) => "Hello" + val;

//Multiline Arrow Function

// if a function body has multiple statment you need to put them inside curly brackets 

let sum = (a,b ) => {
    let result = a + b ;
    return result;
}

let result1 = sum(5,7);
console.log(result1); 