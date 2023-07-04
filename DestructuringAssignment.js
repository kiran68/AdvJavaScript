//Destructuring assignment

//Destructuring assignment is a special syntax that allows us to "unpack" arrays or object into a bunch of variables, as sometimes thats more convenient.
//Destructuring also works great with complex functions that have a lot of parameters, default values, and so on .soon we'll see that

//Array destructuring 

// we have an array with the same and surname
let arr = ["Kiran", "Ravi"]
//--------------------------------------------------------
//desructuring assignment
// sets firstName =  arr[0]
//and surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); //Kiran
alert(surname); //Ravi


//Allow javaScript to easily get content from arrays and objects

const arr1 = [1,2,3,4,5];
const [one, two, three]= arr1;
console.log(one); //1;
console.log(two); //2
console.log(three); //3

//To skip certain values 
const [first, , last] = arr1;
console.log(first); //1
console.log(last); //5


//object can also be destructurized and assigned
 const strudent = {
    name: 'kiran Urshil',
    age : '24',
    city: "Sumbhaji Nagar"
};

const {name,age,city} = student;
console.log(name);
console.log(age);
console.log(city);





//---------------------------------------------------------------------


//The Rest  '...'

// usually if the array is longer than the list at the left the "extra" items are omitted
//for example here only two items are token and the rest is just ignored

let [name1, name2, ...rest] = ["Kiran", "Ravi", "Pankaj", "of the Roman Reblic"];
//rest is array of items, starting from the 3rd one
alert(rest[0]);
alert(rest[1]);
alert(rest.length);

// the alue of rest is the array of the remaining array elements.
// We can use any other variable name in place of rest, just make sure it has three dots before it and goes last in the destructuring assignment
 let [nameOne,nameTwo, ...titels] = ["Kiran", "Ravi","Pankaj", "of the Roman Reblic"];






