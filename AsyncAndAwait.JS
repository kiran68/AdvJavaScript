//Asynch
// asynch and wait make promises easier to write 
// asynch makes a function return a promise
//await makes a function wait for a promise 




//Async Syntax
// THe keyword async before a function makes the function return a promise

// async function myFunction(){
//     return "Hello";
// }

// function myFunction (){
//     return Promise.resolve("Hello");
// }

// //Here is how to use the promise 

// myFunction().then (
//     function(value) {
//     },
//     function(error) {
//     }
// )


// async function myFunction(){
//     return "Hello";
// }
// myFunction() .then (
//     function(value) {
//         myDisplayer(value);
//     },
//     function(error) {
//         myDisplayer(error);
//     }
// );


// async function myFunction (){
//     return "Hello";
// }
// myFunction().then (
//     function(value) {
//         myDisplayer(value);
//     }
// );


// const getData = async => {
//     let data = "Hello World";
//     return data;
// }
// getData().then(data => console.log(data));



//---------------------------------------------------------------

//await
// The await keyword is used inside the sync function to wait for the asynchronous operation.
//Syntax


//await works only inside async function
let value = await promise;


const getData1 = async() => {
    let y = await "Hello World";
    console.log(y);
}
console.log(1);
getData();
console.log(2);



async function f(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });
    let result = await promise;  // wait until the promise resolve
    alert(result); "Done"
}
f();


// we cant use await in regular function 
//EX:-
function f(){
    let promise = Promise.resolve(1);
    let result = await promise;  // Syntax error
}




