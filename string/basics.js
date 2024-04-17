// ********Complete Javascript Notes********


// String Opertions :


// how to declare a string : 

// two meathods to do so:

// 1. const name = "Rishabh"
// output : Rishabh



// 2. const name = new string("Rishabh")
// output : [String: 'Rishabh']
// note : string is stored in form of object here


// In String, the data is stored as key value pair, that means :

// here, in the above example i have stored "Rishabh" as my string so : 

// R is stored at [0] position
// i is stored at [1] position
// s is stored at [2] position
// h is stored at [3] position
// a is stored at [4] position
// b is stored at [5] position
// h is stored at [6] position

// I can access them by : 

// const name = "Rishabh"
// console.log(name[1])
// output : i

// or 

// const name = new String("Rishabh")
// console.log(name[3])
// output : h







// string concatenation :

// old syntax for concatenation : 

// const name = "Rishabh"
// const repoCount = 50

// console.log(name + repoCount);

// This will give "Rishabh50" as output



// new, recommended syntax : 

// const name = "Rishabh"
// const repoCount = 50

// console.log(`Hello, my name is ${name}`);

// here, we have used backticks `` and ${}

// now, to concatenate name and repoCount :

// const name = "Rishabh"
// const repoCount = 50

// console.log(`Hello, my name is ${name+repoCount}`);

//  meathods we can perform on strings : 

// although there are many meathods we can perform on strings, but here are some of the main meathods : 





const mystring = new String("this is a sample")

// console.log(mystring.length) 
// output : 16

// console.log(mystring.toUpperCase()) 
// output : THIS IS A SAMPLE

// console.log(mystring.toLowerCase())
// output : this is a sample


// What is present at a given index, there are few meathods to find that, all do almost same thing : 


// console.log(mystring[1])
// output : h

// console.log(mystring.charAt(12))
// output : m

console.log(mystring.at(2))






// https://www.w3schools.com/js/js_string_methods.asp#mark_charat