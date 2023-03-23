const prompt = require('prompt-sync')()
const min = 1
const max = 100
const num = Math.floor(Math.random() * ((max-min)+1)) + min
// floor(0.5 * 100) --> 50 + min(1) --> 51 
// Math.random() --> generate random values between 0-1 0 inclusive 1 exclusive

let user_guess = Number.parseInt(prompt("Enter your Guess: "))
let noOfGuess = 1
while(true){
    if(user_guess == num){
        const score = 100 - noOfGuess
        console.log(`Congraulations! You Guessed the right number, it is ${num} and your Score is ${score}`)
        break
    }
    else if(user_guess > num){
        console.log("Your Guessed value is greather than actual Number")
        user_guess = Number.parseInt(prompt("Try Again: "))
        noOfGuess++
    }
    else{
        console.log("Your Guessed value is less than actual Number")
        user_guess = Number.parseInt(prompt("Try Again: "))
        noOfGuess++
    }
}