// string is a data type used to store text
// we have 3 or more types to define strings 

let s = "Harry"
let str1 = 'Niraj'
let str2 = `template literals` // known as template literasl with this we can use variable inside the string using ${} sign
let templateLiteral = `the value of str2 is "${str2}" and concatenation of s and str1 is "${s+str1}"`
// we can use single quotes and double quotes inside the backquotes (template literals)
console.log(templateLiteral)

// escape sequence character (\ backslash)
// let mystr = 'D'angelo'  // java script lead an error in order to resolve this error
let mystr = 'D\'angelo'
console.log(mystr) // this will help us to print single quote inside the strin frames with single quote
let mystr2 = "D'angelo"
console.log(mystr2)

// other escape sequence characters are you should need to use only backslash remember this point
// \n -> used for new line
console.log("mere baad ek new line aa jaye\n")
console.log("kya mere pehle ek new line hai ?")

// \t -> used for tabl
console.log("Tab after this \t tab before")

// \r -> used for carriage return
console.log("this is carriage return character  \r")

// now methods of strings
let str = "this is my string"
console.log(str.length)
str = "Niraj\n"
console.log(str.length)
str = str.toLowerCase()
console.log(str)
str = str.toUpperCase()
console.log(str)

// slicing of string is so easy usign .slice method 
str = "this is me Niraj"
subStr = str.slice(2) // this means from index 2 to last
subStr = str.slice(0,5) // this means from index 0 to last - 1 that is 4
console.log(subStr)

// .replace method
str = "My name is niraj"
newStr = str.replace('name','naam')
console.log(newStr)

// .trim method
str = "   string with    white spa   c e  s"
console.log(str) 
str = str.trim() // only remove white spaces from beginning and end
console.log(str)

// .concat (we can also use + operator)
str = "hello from str "
str1 = "hello from str1"
str = str.concat(str1," Yes me bhi array ka part hu jo ki as a paramter pass ho raha hai ")
console.log(str)

// ******** Most important ****** 
// strings in js is imutable that means you cannot change the value like this
str = "this is me"
console.log(str[8])
// str[8] = 'h' // this will not change the string because it is immutable
console.log(str)
// originial string kabhi changd nahi hoti apki chahe ap koi bhi method apply kr lo vo apko hamesha nayi string return krke deti hai 