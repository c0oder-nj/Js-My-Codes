// js jo hai vo html pages ko live banane ke liye banai gai thi 
// js ko ham html me likh skte hai inside script tag
// js ko smjhne ke liye browser ke pass ek run time engine hota hai jisko embedded engine ya js runetime bolte
// agr apn chahte hai user ke action ke according apna webpage kaam kre toh uske liye hamne js banaayi or use kri

// basics 
// html --> page ko skeleton dene ke liye-
// css --> page ki designing ke liye
// js --> page ko logic (working) banane ke liye

// in browser js has many limitations like vo apke dwara downloaded files ko read nhi kr skti 
// so aisi website nahi ban skti jo online apko virus detect kr ke bata de agr aisa kuchh hota hai toh vo fake hai

// for more theory visit downloaded pdf of cwh
// we have developer tools that have mainly 3 columns
// elements --> all html element
// console --> used for error and logs
// network --> all network related information

// agr ham external css or js  ka use krte hai toh fayda ye hota hai ki vo cache ho jati hai jisse next time 
// fast access milta h

const obj = {
    1:'1',
    2:'2',
    2:'3' // it will update the value of key 2 to '3'
}

// now different console methods
console.log(console) // we are printing console object | prints all the methods of console
console.log("console.log() is Used for showing output at console")
console.error("console.error() is used for showing error at console")
console.warn("console.warn() is used to show warning on console")
// console.clear() // used for clearing the console
console.assert(84>5) // used to check condition is true or not if false then it raise an error
console.log(obj)
console.table(obj) // used for showing data of any object or other thing tabulary on console
console.info("Used to print info at console similar to .log but reflects in info section")

// console.time and console.timeEnd
// this functions are mainly used to calculate time of any procedure or scirpt or fragement of code eg.

console.time("forLoop")
for(let i=0; i<50; i++){
    console.log("Niraj")
}
console.timeEnd("forLoop")


console.time("whileLoop")
let i=0
while(i<50){
    console.log("Niraj")
    i++
}
console.timeEnd("whileLoop")

// now what is alert confirm and prompt 
// alert() --> used for showing alert at web page
// alert("This is alert bolte apki js work kr rahi hai")

// prompt() --> variable ke andr value le lega user se 
// let a = prompt("Enter the value of a ",548) // 548 is my default value that is optional

// confirm() --> used for taking conscent from the user 
// let ans = confirm("Are you confirm to write your value on page")
// if(ans){
//     document.write(a)
// }
// else{
//     document.write("Please allow me to write on the page")
// }

// window object BOM and DOM
// BOM --> stands for browser object model
// DOM --> Document object model
// Window object represent browser window and provide methods to control that | it is a global object
// window object has three parts BOM DOM JavaScript core
// js me sb kuchh window object ke andr aata hai vo sbse main hota hai eg.
// window.alert() or window.console.log() etc
window.console.log(window) // showing window object at console

// DOM --> represents the page content as html
// apke pure html page ko ek js object bana diya gaya hai or usko document Naad de diya hai 
// isliye ham document.body ya fir document.getElementByid aisa krte hai kyuki us js object ka naam document hai
// ------- upar ke dono point ----------
console.log("Js represenation of my html page is ",document)
// document.body --> html page body as a js object using DOM
console.log(document.body)
// document.body.style.background = "blue" | changing css with the help of js
document.body.style.background = "blue"




// BOM it represent additional object provided by the browser (host service ) for working with everything
// except the document | BOM Stands for browser object model 

// browser (host service) ke dwara use hone wali chijon ko as a js object bana kr manipulate krna
// alert confirm and prompt are the part of bom (host enviorment deta hai bom ke object)