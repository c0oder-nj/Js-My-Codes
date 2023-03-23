// nn bb ss u
// we have 7 types of primitive variable in java script that is 
// Null Number  boolean Bigint  string symbol  undefined

let a = null // we explicitely state that a is null // default value is undefined
let b = 541
let c = true
let d = BigInt('2323223')
let e = "This is my string"
let f = Symbol("I'm a symbol")
let g = undefined 
let h// it is also undefined because we don't define h variable


console.log(a,b,c,d,e,f,g,h)
console.log(typeof f)

// Non Primitive data types in js
//Objects is a non primitive data type that is similar to the dictionary of python 
// Always trys to create object with const keyword because in let and var e.g. in below example niraj is my let type variable that references to an object that contains values in key-value pair so our let type variable can be re-assigned to another value so that will may be create an ambiguity in future so if we declare this varaible as const so it will not allowd to re-assigned that will be of safe side.
let niraj = {
    "name":"Niraj",
    "id":1,
    "Age":21
}

niraj = "This is String data type before this I'm a js object "
// but if i creat this object as const so it will not allowed to change it referece that is variable reference to object to some other value

console.log(niraj)
// console.log(niraj[0]) since it is similar like key value pair so we need a key in order to access any value i.e in below example

// console.log(niraj["Age"]) // prints undefined

//Question five

const Dict = {
    "for" : "ke liye",
    "do" : "karo",
    "he" : "uska",
    "She" : "uski"
}

// console.log(Dict.She) // or console.log(Dict["She"])
