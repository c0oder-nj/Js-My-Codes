const prompt = require('prompt-sync')()
// loops are used to perfrom repeated task over and over again based on specific conditios
// in js we have mainly 4 types of loops

/*for loop
while loop
do while loop
forEach loop*/

// syntax for every loop

// for(intialization; condition; updation)
// for (let i = 0; i < str.length; i++) {
//     // block of code 
// }

// example of for loop
let num = prompt("Enter the number: ")
for(let i=1; i<=10; i++){
    console.log(`${num} * ${i} = ${num*i}`)
}

// while loop
// while(condition){
//     // code to be executed
// }
let i = 1;
// while(i<=10){
//     console.log(`${num} * ${i} = `,num*i)
//     i++
// }


//do-while loop
// do{
//     //code to be executed
// }while(condition)
const arr = new Array()
// console.log(typeof arr) --> object
do{
    console.log(`${num} * ${i} = `,num*i)
    arr.push(num*i)
    i++
}while(i<=10)

// arr.push("Pushed item by manually")

// forEach loop --> basically this loop is used to iterate over iterable things like arrays objects etc 
// forEach me kisi bhi iterable chij ki ek ek value aati hai apne pass
// const arr = [5,10,15,20,25,30,35,40,45,50]
// arr.
arr.forEach((val)=>{
    console.log("printed usign forEach loop",val)
})

//using forEach in js objects

const myObj = {
    'name':"Niraj",
    'age':21,
    'section':'cse',
    'class':'cse-3'
}

// method of for loop used to print values in object
// for in loops
for(key in myObj){
    console.log(`for in loop Student ${key} is ${myObj[key]}`)   
}

// for of loops
console.log(arr.length)
for(var1 of arr){
    console.log(`printed using for of loop ${var1}`)
}

// now using forEach in js object
Object.keys(myObj).forEach((key)=>{
    console.log(`Student ${key} is ${myObj[key]}`)
})

// now demonstration of break and continue statements in js
for(let i=1; i<=10; i++){
    if(i==5){
        continue // this will continue the execution of loop at this point when the condition met mtlb jab bhi condition ye hogi loop ke niche ka code execute nahi hoga sirf wapas next value se start ho jayega
    }
    if(i==7){
        break // this will break the execution of loop khatam
    }
    console.log(`${num} * ${i} = `,num*i)
}

//Functions in javascript --> it is the block of code designed to perform a specific task
function sum1(a,b){
    let ans = a+b;
    return ans
}

let ans = sum1(10,20) // calling of the function (function invocation)
console.log(ans)

// arrow function --> another way to declare functions in js that gives us a lot of advantages just like all callbacks functions are arrow functions that also saves our time | sign for arrow function is =>

// we can declare above function like arrow function how let's see
const sum2 = (a,b)=>{
    let ans = a+b;
    return ans
}

let ans2 = sum2(15,5)
console.log(ans2)



// another important use of arrow function
        // setTimeout se koi bhi function ek particular time interval ke baad run hota hai vo bhi sirf ek baar
        setTimeout( () => {
            console.log("We are inside our set time out function")
        },12000)

        // set interval se function in particular time interval ke baad run hota hai jaise har 2 seconds me

        setInterval( () => {
            console.log("setInterval kisi bhi function ko ek interval ke baad run krega baar baar e.g. har 2 seconds me")
        },4000)

        // arrow function for sum of two numbers
        // let sum1 = (a,b) => {
        //     return a+b;
        // }

        // or
        let sum3 = (a,b) => a+b;

        let myans;
        myans = sum3(10,5)

        console.log(myans)

        // shortest arrow function
        let half = a => a/2; // in only one argument we can do like this

        // if you have no argument
        let greet2 = () => console.log("Another greet function")

        greet2()

        let obj1 = {
            greetings : "Good morning",
            names : ["Mohan","Sohan","Suresh","Rupesh"],
            speak(){
                this.names.forEach((name)=>{
                    console.log(`${this.greetings} lexical this lag gaya apka naam hai ${name}`)
                })
            }
        }
        obj1.speak()
        
        // now what is this and lexical this 
        // this mtlb yah means ki jis kisi ke bhi andr apn kaam kr rahe hai uske parent e.g. speak ke andr this lagaya toh vo toh vo uske parent obj1 ko referenc kiya agr apn kis function ke andr kaam kr rahe hai toh with the help of this we point to that function
        
        // what is lexical this
        // lexical this me basically aisa hota hai ki jo hamara arrow function hota hai uske andr agr aap this use krte ho toh vo this arrow function ke parent ko point na krte huye | arrow function ke parent ke parent ko point krta hai yane ki dadaji ko . |  ko point na krte huye uske parent element ko target krta hai jaise ki upar ke example me this.greetings arrow fucntion ke parent obj1 ke greetings ko target kr raha tha but vhai nihe ke example me this.greetings us function ke greetings ko target krega jo ki hame undefined return krega kyuki us function me greetings hai hi nahi 

        //arrow function ka basically name nahi hota hai isliye vo uske parent ko as a this target krte hai i.e. my learning maine aisa sikha
        
        let obj2 = {
            greetings : "Good morning",
            names : ["Mohan","Sohan","Suresh","Rupesh"],
            speak(){
                let greetings = "Greet from speak function"
                this.names.forEach(function f(name){
                    console.log(`${this.greetings}`) // gives undefined at greetings wala part kyuki khud ke andr ka i.e. function f ke andr ka greetings dhundega
                })
            }
        }

        obj2.speak()
