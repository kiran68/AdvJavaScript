//Promise 
// A promise is a special javaScript object.it produces a value after an asynchronous operation completes successfully.
// or an error if it dose not complete successfully due to time out. network error,and so on 

//Note :- Successful call comletions are indicated the resolve function call, and errors are indicated by the reject function call.


//you can create a promise using the promise constructor
 //Syntax

let promise = new promise(function(resolve,reject){
    //Make an asynchronous call and rither resolve or reject
});


console.log ('Start')

 const p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
    // resolve("1")
        reject(1)
    },2000)
})

p1.then((data) => {
    console.log('then1',data);
    
})
.then(data =>{
    console.log('then2',data);
    return data;
})
.catch(err => console.log(err));


console.log ('End');


//resolve(value) : if the job is finished successfully with result value.
//reject(errir) : if an has occured, error is the error object

let promiseOne = new Promise(function(resolve,reject) {
    // the function is executed automatically when the promise is constructed 
    // after 1 second that the job is done with the result "done"
   setTimeout (() => resolve("done"), 1000); 
});


//new Promise(executor)    resolve("Done")                   state : "Fullfilled
//state : "Pending"   -------------------->   result : "done"                                           
//result : undefined


 let promiseTwo = new Promise(function(resolve,reject){
    // after one second single that the job is finished with an error 
    setTimeout(() => reject(new Error("Whoops!")), 1000);
 });

 // The call to reject() moves the promise object to rejected state:

 //new Promise(executor)
 // state : "Pending"    -----------------------> state: "rejceted"
 // result : undefined                            result : error



 //-----------------------------------------------------------------]


  //Consumers : then, catch
// Syntax 

promise.then(
 function(result){ 
    // handle a successful result
    },
 function(error) {
        // handlr and error
    }
)


// Instance, here reaction to succesfully resolve promise
let promise1 = new Promise(function(resolve,reject){
    setTimeout(() => resolve("Done"), 1000);
});
// resolve runs the first function in then
promise1.then(
    result => alert(result),  // shows "Done" after 1 second
    error => alert(error)    // doesnt run 
)

// the first function was executed.
// And in the case of a rejection , the second one:


let promise2 = new Promise(function(resolve,reject){
    setTimeout(() => reject(new error("whoops")),1000);
});
// reject runs the second function in .then
promise2.then(
    result => alert(result), // doesnt run
    error => alert(error) // shows "Error: Whoops" after 1 second
);




//------------------------------------------------------------------------------  

// catch
// if we are interested only in error, then we can use the first argument .then(nill, errorHandlingFunction).
// or we can use .catch(errorHandlingFunction), which is exactly the same


let promise4 = new Promise((resolve,reject) => {
    setTimeout(() => reject(new error("Whoops!")), 2000); 
});

//.catch is the same as promise.then
promise.catch(alert);


new Promise((resolve,reject) => {
    setTimeout (() => resolve("value"),2000);
})
.finally(() => alert ("Promise ready")) // triggers first
.then (result =>  alert(result)); // .then shows " value"

//1) A finally handler has no argument in finally we dont know whether the promise is successful or not that all right  as out task is usually to perform "general" finizing procedures.
//please take a look at the example  above as you can see the finally handler has no arguments, and the promise outcome is handle by the next handler.

//2)  finally handler "passes through" the result or error to the next suitable handler for instance, here the result is passes through finally to then

new Promise((resolve,reject) => {
    throw new Error("error");
})

.finally(() => alert("Promise ready"))
.catch(err => alert(err));

