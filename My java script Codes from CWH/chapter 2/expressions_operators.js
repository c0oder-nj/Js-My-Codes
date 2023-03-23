const prompt = require('prompt-sync')()

// what are expressions --> expressions are the fragement of code jo ki run hone pr error na de e.g
77;
"Niraj"
true
null
undefined 

//this all are expresssions of javascript

// Operators in js

//**********airthematic operator**********
// plus + 
// minus - 
// multiplye *
// divide / 
// exponentian ** e.g. 2**2 --> 4
// modulus % also called remainder operator
// incremental operator --> Pre , post
// preincrement ++ variable | post increment variable ++ 
// decrement operator --> pre, post
// -- variable | variale --

let a = 10;
let b = 2
// console.log("Values of a and b is ",a,b)
// console.log(`a+b is ${a+b}`)
// console.log(`a-b is ${a-b}`)
// console.log(`a*b is ${a*b}`)
// console.log(`a/b is ${a/b}`)
// console.log(`a%b is ${a%b}`)
// console.log(`a**b is ${a**b}`)
// console.log(`pre increment ++a ${++a}`)
// console.log(`post increment a++ pehle print hua then increment hua  ${a++}`)





// ********comparision operators (also called realtional opearators)******
// == equals to
// != not equals to
// === equal value and equal type
// !== not equal value and not equal type
// > greater than
// < less than
// >= greater than equals to
// <= less than equals to
// ? teranry operator syntax (condition)?'if true execute this':'else this'

a = 10 
b = 15
console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
console.log((a<b)?'a is less than':'b is less than')
// difference between == and === | == is checks for the values is equal or not while at the other hand === checks for value and its type with and condition
// e.g.
comp1 = 6 
comp2 = "6" 
console.log(comp1 == comp2) //this will give true because values are same
console.log(comp1 === comp2) // this will give false because values are same but their type is differete

comp1 = 6
comp2 = "6" 
console.log(comp1!=comp2) //return false since values are same
console.log(comp1 !== comp2) // check for not equal values and not equal types here  6 and 6 are equal values but type is different


// *********** assignment operators **************
// = assigning a value const a = 10
// += e.g. x += 5 means x = x+5
// -= 
// *=
// /=
// %=
// **= e.g. a**=b measn a = a**b


// ********logical operators*******
// logical and &&
// logical or || 
// logical not !

// ****** more about js operators *******
/* Apart from this we have typeof operators that returns the type of given variable or operands
and we have bitwise operators that is bitwise and or bitwise or etc that is performing operations on bit by bit 
*/


// *** what is operator operands and result *****
// e.g. 7+9 = 16 here 7,9 is operands , + is operater and 16 is result
// division wale me e.g 15 / 3 = 5 "(dividend / divisor) = result jo sheshfal bacha vo ho gaya quoteint" here jo number divide ho raha hai usko bolenge dividend, jo number divide kr raha hai usko bolenge divisor the result is quoteint and if some remainder is there than that will known as remainder



// basics of if else also known as conditional expressions
const age = prompt("Enter your age: ")

if(age>18){
    console.log("You can vote")
}
else{
    console.log("You cannot vote")
}

// else is always optional

// if-else ladder

const num = prompt("Enter the number b/w 10-20: ")
if(num>=10 && num<=12){
    console.log("Number is b/w 10 and 12 inclusive")
}
else if(num>=13 && num<= 15){
    console.log("NUmber is b/w 13 and 15 inclusive")
}
else if(num>=16 && num<= 18){
    console.log("Number is b/w 16 and 18 inclusive")
}
else if(num>=19 && num<= 20){
    console.log("Number is either 19 or 20")
}



// switch case is also a part of conditional expressions
const day = prompt("Enter day in small letters (first 3 only): ")
switch(day){
    case 'mon':
        console.log("Jai shri Mahakal")
        break
    case 'tue':
        console.log("Jai bajarngbali")
        break
    case 'wed':
        console.log("Jai shri Ganesh")
        break
    case 'thu':
        console.log("om sai ram")
        break
    case 'fri':
        console.log("Jai santoshi maa")
        break
    case 'sat':
        console.log("Jai shani dev")
        break
    case 'sun':
        console.log("jai shri sury narayan bhagwan ki")
        break
    default:
        console.log("Please enter correct input")
}

// why break is necessay in switch break nahi lagayenge toh fir jaha se bhi condition true hoti hai uske baad ke saare cases execute ho jate hai 


// ternary operator using age wala example
const umar = prompt("Enter your umar: ")
let result = (umar>18)?`your age is greater than 18 it is ${umar}`:`Your age is less than 18 it is ${umar}`
console.log(result)

const num1 = prompt("Enter your number ")
console.log((num1>10)?num1/2:num1*2)