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

const name = new String("Rishabh")
console.log(name[3])








// here i have shown how to concatenate a string : 


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

// so we use backticks which helps in string Interpolation, we create placeholders for that


