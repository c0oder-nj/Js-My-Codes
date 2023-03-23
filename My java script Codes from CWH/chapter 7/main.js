// walking the dom --> mtlb agr kisi html page ko aap java script ki madad se manipulate krna chate ho toh use ham walking the dom ya fir dom manipulation keh skte hai 

// now what is document tree
// DOM tree referes to an html page where all type of nodes are object of our page notes dekho
// three main type of nodes are :-
// text nodes -> alway a leaf node of the dom tree (contains plaine text) <title>This is title</title> This is title is my text node
// element nodes
// commment nodes

//e.g. in an html page <html> tag is at root and <head> and <body> are it's children


// auto correction --> agr apn ne <span> tag start kra or use end krna bhul gaye toh browser khud appropriate place pr jaa kr use end kr dega ya fir agr ap span tag ko div se close kr rahe ho toh vo use ignore kr ke use bhi thik kr dega ye hota hai auto correction eg. see index.html
// another example if we put someting outside the body so it will automatically put it inside the body


// now walking the dom
// mujhe pata hai document typically kis form me hota hai html inside that <head></head> and <body> </body>

// here document is my js object which referes to my actual web page
document.head // will give me head part of document // will return head tag
document.body // will give me body part of document // will return body tag
document.documentElement // will give me all elements of my document // return my html

// console.log() na krne ki jaagah mujhe web page ke console me jaa kr print krke dekhna chahiye that will give more understanding about this things

// element -> anything in html that is surrounded by 1 opening and closing tag is my element

document.title // return me a string title tag return nahi krta title ki string return krta hai
console.log(typeof document.title)

// now if we put js tag before body so sometimes when we write document.body it will give us null let's see


// children of an element(children sibling parent)
// children --> direct as well as deeply nest element inside an element

// accessgin first last and all child nodes
// now if i want to acess first child of my document so vo hoga <!DOCTYPE>  lekin agr mujhe body ka first child acess krna hai toh vo hoga 

console.log(document.body.firstChild) // it will give me text because body ke just baad ek text node hai jo ki hai space or enter

// if I remove space after body it will give me my <div> tag
console.log(document.body.lastChild)


// now element.childNodes[0] === element.firstChild alway equivalenet

console.log(document.body.childNodes)

// below both will give me the same result
console.log(document.body.childNodes[0])
console.log(document.body.firstChild)

// how to access last node using childNOdes 
console.log(document.body.childNodes[document.body.childNodes.length - 1], document.body.lastChild)

// childNodes are not an array but it looks like actually childNodes are collections we can convert it into array using Array.from() method

console.log(typeof document.childNodes)

//hasChildNodes() --> it is a function used to check whether any html element has child nodes or not it will return true or false

console.log(document.body.hasChildNodes())// print true in console

console.log(document.body.childNodes[2].childNodes[1].hasChildNodes()) // it will give me false

// document.body.childNodes[2] will target span element
//span.childNodes[1] will target script element
// script.hasChildNodes() --> is not having any child node so it will give us false

