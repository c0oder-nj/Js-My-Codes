// koi bhi element ka parent vo hota hai jis bhi element ke andr vo element hota hai 
// sibling -> bhai behan yane ki jin bhi html element ka same parent hota hai 
// siblings are nodes that are children of same parent

// head and body are sibling 
// body is next or right sibling of head
// head is previous or left sibling of body
// parent of body and head is <html>

// what is $0 and $1
// $0--> it is our selected element when we inspect an element on a web paeg
// $1 --> previously selected element 


// implmentation

console.log(document.body.firstChild)
let a = document.body.firstChild

console.log(a.firstChild, a.firstChild.nextSibling)

console.log(a.parentElement) // will return only when it is valid html element // both will return body
console.log(a.parentNode) // will return when it is node jaise ki text node comment node etc

let b = document.head
console.log(b.parentElement)
console.log(b.parentNode)