// Variables
//Example


//syntax

var name = value

// var x = 100;
// var y = 200;
// var z = x + y ;
// console.log (z);


var name;
name = "kiran";
var name = "kiran";
console.log (name);



// var firstName = "Kiran" , age = 24 , gender = "M";
// console.log (firstName , age , gender);


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


