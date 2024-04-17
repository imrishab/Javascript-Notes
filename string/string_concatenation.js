note : We will use new and most preffered syntax including backticks `` and ${}


string concatenation :

old syntax for concatenation : 

const name = "Rishabh"
const repoCount = 50

console.log(name + repoCount);

This will give "Rishabh50" as output



new, recommended syntax : 

const name = "Rishabh"
const repoCount = 50

console.log(`Hello, my name is ${name}`);

here, we have used backticks `` and ${}

now, to concatenate name and repoCount :

const name = "Rishabh"
const repoCount = 50

console.log(`Hello, my name is ${name+repoCount}`);



meathod 2 : 


Concatenation in string : 

syntax : string.concat("character 1 to be added", "char 2 to be added", "char 3 to be added", ....)

const str1 = "NSE"
const str2 = "Reliance"

console.log(str1.concat(":", str2))
NSE:Reliance

console.log(str1.concat(":", str2, "Jio"))
NSE:RelianceJio