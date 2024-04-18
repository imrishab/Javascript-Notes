Number operations : 



1. toString meathod : 
const newNumber = new Number(12345);
str=newNumber.toString()
console.log(typeof(str))
output : string




2. toexponential meathod :
const newNumber = new Number(12345); 
console.log(newNumber.toExponential())
output : 1.2345e+4

const newNumber = new Number(12345); 
console.log(newNumber.toExponential(2))
output : 1.23e+4

const newNumber = new Number(12345); 
console.log(newNumber.toExponential(4))
output : 1.2345e+4

const newNumber = new Number(12345); 
console.log(newNumber.toExponential(6))
output : 1.234500e+4




tofixed meathod (used to roundoff upto given decimal points): 
const newNumber = 34.415421
console.log(newNumber.toFixed())
output : 34

tofixed meathod : 
const newNumber = 34.415421
console.log(newNumber.toFixed(0))
output : 34

note : toFixed(0) and toFixed() are same

const newNumber = 34.415421
console.log(newNumber.toFixed(1))
output : 34.4

const newNumber = 34.415421
console.log(newNumber.toFixed(2))
output : 34.42

note : for all money related calculations, toFixed(2) is preferred

example : 
const newNumber = 34.84927
console.log(newNumber.toFixed(0))
output : 35

here, toFixed(0) means, we don't want any decimal point in our output, and our first decimal point is 8 which is greater than 5, so 1 will be added in 34. Hence, our output becomes 35




toPrecision meathod ( almost similar to toFixed meathod, but here it returns a given number if digit)

example 1 : 

In this case, i want only 2 digits as my output so, i'll use : toPrecision(2)

const x = new Number(19.5937)
console.log(x.toPrecision(2))
output : 20

note : this meathod also rounds off to nearest integer

example 2 : 
const x = new Number(19.5937)
console.log(x.toPrecision(3))
output : 19.6

console.log(newNumber.valueOf())




toLocaleString meathod : It inserts comma between numbers and can convert 1000000 into 1,000,000 ( US standard) or 10,00,000 ( Indian standard) or any other standard you want

const num = 1000000
console.log(num.toLocaleString())
output : 1,000,000 ( this is US standard)

const num = 1000000
console.log(num.toLocaleString('en-IN'))
output : 10,00,000 ( this is indian standard)