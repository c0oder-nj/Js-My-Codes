// console.log("Hello world")
// differnece between var and let with demonstration

var a = 10 // var has global scope so it can be used inside the function also
// let b = 20 // but it has limited scope let's see 


var Niraj
// let Niraj; // throw an error said identfier Niraj has already been declared


// Let can't be redeclared inside it's scope

// let b = 20; // it gives me error says b is already declared in it's scope

function check_var_a_b(){
    console.log("The value of my variable is ",a)
    // b = 10.2;
    var b = 25; // declared inside the function scope
    console.log("The value of my variable is ",b)
    var b = 10; // var can again be declared inside it's scope // ok
    console.log("The value of my variable is ",b)
    let let_Var = 25

}
// var b = 115 // I can declare variable b here because in the same program I declare it inside the function that is block scoped for it and outside the function it is new scope for my variabel 

// console.log(let_Var) // I can't use let_var here because the scope of that variable is limited to function only
check_var_a_b()

// Where to use var and let
// Var is globally scoped so whenever you want to use variable outside any function or block of code you can use var but you want to use variable inside the function so you can use let

// const variable

const pi  = 3.14;//Const variable must be intialized while you are defining them
console.log("The value of pi is ",pi);
// pi = 5;// This throws error because constant can't be updated 
// const pi = 5; // This throws error because constant can't be redeclared
console.log("The value of pi is ",pi);

// const Niraj // Thir throws error say's const declaration must be intialized
// Niraj = 10