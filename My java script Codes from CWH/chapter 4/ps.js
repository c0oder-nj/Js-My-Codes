const prompt = require('prompt-sync')()
// 1 
console.log("har\"".length) // 4

// 2 

// includes()
var str = "this is my string this"
str = str.includes("this") // returns binary value true or false if str include searched string
console.log(str)

// startsWith()
str = "Niraj chittodiya is my name"
result = str.startsWith("Niraj")
console.log(result)

// endsWith()
result = str.endsWith('name')
console.log(result)

// 3
// var str = prompt('Enter your string: ')
// console.log(`your string in all lower case is '${str.toLowerCase()}'`)

// 4 
str = "Please give me 4000"
// console.log(str)
// result = /\d/.test(str)
// console.log(result)
                        // --> my learnings
// result = /\d/.exec(str)
// console.log(result)
// cwh ne kya kiya 

let num = str.slice("Please give me ".length)
console.log(num)

// 5 
str[8] = 'e' // it will not give an error and not affect the string also because string is immutable
console.log(str)