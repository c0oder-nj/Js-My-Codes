// 1
let myvar = "This is me Niraj Chittodiya"
myvar += 10
console.log (myvar) // gives us this is me niraj chittodya10

// 2
console.log(typeof myvar) // string

// 3
const student = {
    "name": "Niraj Chittodiya",
    'Age': 21,
    'Branch': "CSE",
    'Section': 3
}
console.log(student) 
// student = "I am a student" // gives me error says assignment is not allowed to constant variabel

// 4
student['hobby'] = "Coding"
console.log(student)

// 5 
const dictionary = {
    "Tolerate":"Sahana ya sahan krna",
    "persue":"prapt krna ya picha krna in the sense ki kuchh persue krna",
    "Happy":"Khush",
    "Sad":"Dukhi",
    "Confused":"Pareshan koi chiz smjh na aana"
}

// dictionary.forEach(key =>{
//     console.log(`The meaning of word ${key} is ${dictionary[key]}\n`)
// })

Object.keys(dictionary).forEach((key)=>{
    console.log(`The meaning of word "${key}" is "${dictionary[key]}"\n`)
})