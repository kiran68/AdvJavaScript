// Variables
//Example


//syntax

var name = value

var x = 100;
var y = 200;
var z = x + y ;
console.log (z);


var name;
name = "kiran";
var name = "kiran";
console.log (name);



var firstName = "Kiran" , age = 24 , gender = "M";
console.log (firstName , age , gender);


//local variables
//A JavaScript local variable is decleared inside  block or function. it is accessible within the function or block only 

function abc(){
    var x = 10; // local variable
}

//global variable

// javaScript global variable is accessible from any function. a variable delclared outside function 
// or declared with window object is known as global variable.

var data = 200 ;  //global variable 
function a(){
    console.log(data);
}
function b(){
    console.log(data)

    }
    a(); //  calling javaScripy function
    b();



// If have to declear without value that time values will show is undefined.

//--------------------------------------------------------------------------------------------


//let variable


//sysntx 

let variable_name;

//global scope 

// you can see that a veriable declared in main body or outside the function has global scope.
//it can be accesssed from inside or outside the function 

let g = " Kiran Urshil";
let x = 5;


let x = 20;
 console.log("outside the function x = " + x);

 function show (){
 console.log("inside the function x =" + x);
 }
show ();


//function scope 

// a variable declared inside the function that only  has function scope .
// so it is allowed to access outside the function 


function show (){
    let num = 15;
    console.log("inside the function num = " + num);

}
show();

console.log ("outside the function num = " + num);


//-------------------------------------------------------------------------------------

// Const
// const is another keyword to declare a variable when you do not to change the value of that variable for the whole program

// we can create a constast array; 

 const fruits =  [Apple, Mango, Banana];

  // we can change the element;

  fruits [0] = "greps";

  // you can add an element 
  fruits.push("watermelon");
