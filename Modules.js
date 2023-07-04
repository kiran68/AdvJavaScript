//Modules
// javaScript modules aalow you to break up you code into separate files.
//this makes it easier to maintain a code-base
//Modules are imported from external files with the import statment.
// Modules also rely on type = "module" in the <script> tag.


// export 
//Amodule in javaScrit is just file containing related code.

//1) The export keyword is use to make a variable, function,clss or object accessible to another function,class or object accessible to other modules.
//in other words it becomes a public code.

//2) the import keyword is used to bring in public code from another module

//Derived Variables
export var name = 'Rainbow'

var name = 'Kiran';
var age = '25';
export {name, age};

// Derived constant 
export const sqrt = Math.sqrt;



//derived function 
export function myModule(someArg) {
    return someArg;
}

// import 

import {myModule} from 'myModule' // structure assignment is used
import {name,age} from 'test';

//An import statment can  import defualt functions and other variables at the same time;
import defaultMethod,{otherMethod} from modules.js;

//Example
function getPower(decimalPlaces) {
    return 10 ** decimalPlaces;
}

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function roundToDecimalPlace(number, decimalPlaces = 2) {
    const round = getPower(decimalPlaces);
    return Math.round(number * round) / round;
}



// export 

import {capitalize, roundToDecimalPlace} from 'D:\React\textutils\variables\Modules.js';

function dispplayTotal(name, total) {
    return '${captalize(name)}, your total cost is : ${roundToDecimalPlace(total)}';
}
dispplayTotal('kingsey', 20.4444444);

export{dispplayTotal};