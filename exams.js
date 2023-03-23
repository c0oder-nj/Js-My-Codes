// /*let age = prompt("Enter your age") // used to get input in js
//         if(age>18){
//             // ways to print in js
//             // document.getElementById('myp').innerHTML = 'You can vote'
//             // window.alert("You can vote")
//             // console.log("You can vote")
//             // document.write("You can vote")
//         }
// */

//js module for taking input from the user

const prompt = require('prompt-sync')() // this will return me a prompt function so i saved this as name prompt

// let age = prompt("Enter your age ") // this will help me in get input from the user



// // calling x after definition
// var x = 5;
// document.write(x, "\n");

// // calling y after definition
// let  y = 10;
// document.write(y, "\n");

// // calling var z before definition will return undefined
// document.write(z, "\n");
// var z = 2;

// // calling let a before definition will give error
// // document.write(a);
// let a = 3;

// // declaring a global variable using window object

// function a(){
//     window.my_var = 100; // declaring global variable inside the function
//     document.write(window.my_var)
// }

// a();
// document.write(window.my_var)


// // b()

// document.write("Hello world")

const arr = [1,2,"Niraj",'a',3.5,"How are you"]

// documentw.write(arr[2]) // galat spelling bc
// document.write(arr[2])


// let age = 20

// const result = (age>18)?'you can vote':'you cannot vote1'
// document.write(result)
// document.write("<br>")

//loops in js


//for loop in js
// let num = 2
// for(i=1; i<=10; i++){
//     document.write(num + " * " + i + " = " + num*i)
//     document.write("<br>")
// }

//while loop in js
// document.write("<br>")
// let i=1
// while(i<=10){
//     document.write(num + " * " + i + " = " + num*i)
//     // document.write("Hello")
//     i++
//     document.write("<br>")
// }

// forin loop in js 
const Salaries = {
    'A' : 25000,
    'B' : 50000,
    'c' : 2500
}

// forin loop me koi forin keyword nahi hota hai ap for likh kr array ya js object par usko iterate krte hai

// for (const key in Salaries) {
//   if (Object.hasOwnProperty.call(Salaries, key)) {
//     const element = Salaries[key];
//     console.log("Element value is ",element)
//   }
// }

for(let key in Salaries){
    //adding rupee symbol
    var salary = "RS-" + Salaries[key]

    //printing the values
    console.log(`${key} has salary ${salary}`)
}

const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}

console.log(text)

const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}

console.log(txt)

function myfun(firstname,lastname){
    console.log("Hey there " + arguments[0] + " Your last name is "+ arguments[1]) // another way of extracting function paramerters
}

myfun("Niraj","Chittodiya")