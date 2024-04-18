
//  meathods we can perform on strings : 

// although there are many meathods we can perform on strings, but here are some of the main meathods : 





// const mystring = new String("this is a sample")

// console.log(mystring.length) 
// output : 16


// console.log(mystring.toUpperCase()) 
// output : THIS IS A SAMPLE


// console.log(mystring.toLowerCase())
// output : this is a sample




// What is present at a given index, there are few meathods to find that, all do almost same thing : 

// const mystring = new String("this is a sample")


// console.log(mystring[1])
// output : h


// console.log(mystring.charAt(12))
// output : m


// console.log(mystring.at(2))
// output : i



// this creates an anchor in HTML if HTML is linked with JS : 

// const contentString = "Hello, world";

// document.body.innerHTML = contentString.anchor("hello");

// output on HTML : <a name="hello">Hello, world</a>



// using this meathod (charCodeAt), we can find character code of any character given its index value : 

// Here, in this case, i want to find the caracter code of i which is present at index 2,5 inside the sentence string, taking index 5 here : 

// const sentence = "This is a sample sentence"

// const index = 5

// console.log(`Character code for index ${index} is ${sentence.charCodeAt(index)}`)

// output : Character code for index 5 is 105




// Concatenation in string : 

// syntax : string.concat("character 1 to be added", "char 2 to be added", "char 3 to be added", ....)

// const str1 = "NSE"
// const str2 = "Reliance"

// console.log(str1.concat(":", str2))
// NSE:Reliance

// console.log(str1.concat(":", str2, "Jio"))
// NSE:RelianceJio




// console.log(String.fromCodePoint(9773, 9733, 9842, 0x2f804));
// output : ☭★♲你 ( to print unique characters using their codepoints)




//  using this meathod (indexOf), we can search for the index, if character is given : 

// we can search index for individual character or group of characters too

// const paragraph = "My dog's name is tyson"
// console.log(paragraph.indexOf("o"))
// output : 4

// (note : in the above example, we tried searching for index of onabort, but o is present 2 times in the paragraph, 1 at index 4 and other at index 20, in this case we'll get the output of what comes first, here 4 comes before 20 so we get 4 in output)


// console.log(paragraph.indexOf("tyson"))
// output : 17



// similar to indexOf meathod, we have lastIndexOf meathod, if a character is occuring many times, this meathod will return the index of the last occurance

// const paragraph = "My dog's name is tyson"
// console.log(paragraph.lastIndexOf("o"))
// output : 20




// slice and substring : 


// this meathod (substring), slices the string and returns only a part of the string in output

// const newString = "Chrome Extension"

// console.log(newString.substring(2))
// output : rome Extension

// console.log(newString.substring(1))
// output : hrome Extension

// console.log(newString.substring(1,3))
// output : hr

// console.log(newString.substring(1,9))
// output : hrome Ex


// note : substring and slice are almost similar, bas slice me we can use negative indexing too : 

// const newString = "Chrome Extension"

// console.log(newString.slice(-5, -1))
// output : nsio

// console.log(newString.slice(-8))
// output : xtension



// trim meathod (it removes all the blank spaces): 

// const thisString = "       sample string with spaces       "

// console.log(thisString)
// output : "       sample string with spaces      "

// console.log(thisString.trim())
// output : "sample string with spaces"


// note : trimright and trimleft meathods are also present




// replace meathod in string (replaces previous char. with new char.) : 

// const str11 = ("Bear%market is here")
// console.log(str11.replace('Bear%', 'Bull '))
// output : Bull market is here




// includes meathod in string (If i want to find our if a given word or character is present in a string or not) : 

// const newString = "Check if Rishabh is present in string or not"
// console.log(newString.includes("Rishabh"))
// output : true
// console.log(newString.includes("Prateek"))
// output : false




// split meathod in string ( if we want to split words or characters in string based on a separator)

// in most cases if we have a sentence, each words in sentence are separated by a space ' '. so we can use split meathod to seperate each word of the sentance

//  apart from space ' ', we can separate words or charcters based on , or - or anything else.

//  this space, comma, dash all are called "separators"

// const str  = "The quick brown fox";
// const words  = str.split(' ')

// console.log(words)
// output : [ 'The', 'quick', 'brown', 'fox' ]

// console.log(words[2])
// output : brown


// const str  = "The quick brown fox";
// const words  = str.split('r')
// console.log(words)
// output : [ 'The quick b', 'own fox' ]


// const str = new String("Reliance, HDFC, ICICI, HUL, ITC")
// console.log(str.split(', '))
// output : [ 'Reliance', 'HDFC', 'ICICI', 'HUL', 'ITC' ]

// toLocaleString meathod : it converts 1000000 into 1,000,000 ( US standard) or 10,00,000 ( Indian standard)

const str = 1000000
console.log(str.toLocaleString())





















// References : 

// W3 schools : https://www.w3schools.com/js/js_string_methods.asp#mark_charat

// MDN reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split