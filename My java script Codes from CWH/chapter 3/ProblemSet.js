const prompt = require('prompt-sync')()
// const math = require('math')

//1 
const obj = {
    'Mohan':25,
    'Sohan':90,
    'Niraj':95,
    'Harsh':80
}

for(let i=0; i<Object.keys(obj).length; i++){
    console.log(`Marks of ${Object.keys(obj)[i]} is ${obj[Object.keys(obj)[i]]}`)
}

console.log()

// 2
for(key in obj){
    console.log(`Marks of ${key} is ${obj[key]}`)
}

//3
let max = 20
let min  = 10
let num = Math.floor(Math.random() * ((max-min) + 1)) + min
let input_num = prompt("Enter the number b/w 10-20 in order to guess the number: ")
while(true){
    if(input_num == num){
        console.log("You guessed the right number and it is ",num)
        break
    }
    else{
        console.log('Try again!')
        input_num = prompt()
    }
}

// 4 mean of five numbers
function meanOfFive(){
    let a = prompt("Enter first number: ")
        a = Number(a)
    let b = prompt("Enter second number: ")
        b = Number(b)
    let c = prompt("Enter third number")
        c = Number(c)
    let d = prompt("Enter fourth number: ")
        d = Number(d)
    let e = prompt("Enter fifth number: ")
        e = Number(e)

    // return ((a+b+c+d+e)/5)
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(e)

    let sum = a+b+c+d+e
    console.log(sum)
    let ans = sum/5
    console.log(ans)
}

meanOfFive();


