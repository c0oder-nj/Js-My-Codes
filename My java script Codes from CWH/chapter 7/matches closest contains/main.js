//  we have 3 mainly used methods for searching in the dom 

// matches 
// ele.matches(css) --> to check if the element matches the given css selector
let id1 = document.getElementById('box1')
// console.log(id1)
console.log(id1.matches('.container')) // it will give me false because my id1 element doesn't have the container class
console.log(id1.matches('.box')) // this will give me true


// closest
// ele.closest(css) --> it will check element all ancestors for the given css selectors 
// the element itself is also checked

let my_span = document.getElementById('sp-1')
console.log(my_span.closest('.box')) // it will return me the element from the parent because its ancestors means parents contains the class .box
// basically ele.closest(css) aise work krta hai ki sbse pehle vo khud ko check krega agr vo given css selectors ko match nahi krta fir uske parent ko check krega agr uske parent ko match nahi krta toh fir uske parent ko match krega usko nahi krta toh fir or uske parent ko match krega or jaha se match ho gaya vaha se us element tak element return kr dega



// contains()
// eleA.contains(eleB) --> return true if eleB is inside the eleA
// of elementB is the descendent of eleA or child of element A
// eleA ke andr agr eleB hoga toh vo true return krega

console.log(id1.contains(my_span)) // this will return me true because the div with id1 cotains span of id sp-1