// change the color of home to red

let home = document.body.firstElementChild // it will give me navbar
home = home.firstElementChild // it will give me ul
home = home.firstElementChild // it will give me first li
home = home.firstElementChild // it will give me <a> tag inside that li 
home.style.color = 'red' // now this will change the color to red

// I didn't write the tbody tag but html will write it for me

// chnage first and third child color 

let my_ele = document.getElementById('threeChild')
console.log(my_ele)
let firstChild = my_ele.firstElementChild
let lastChild = my_ele.lastElementChild

console.log(firstChild,lastChild)

firstChild.style.color = 'blue'
lastChild.style.color = 'wheat'


// my Learning 
// document.getElementById() will give me element in html format like in <div id = ""></div> like this in this type of format I can use .firstElmenet childs like method
//but
// document.getElementsByClassName() will give me an html collection in which I can't use child methods like .firstElement etc. but i can iterate it using my_ele[0] etc


// change the background of all <li> tags to cyan

let all_li = document.querySelectorAll('.li-1')
console.log(all_li)
all_li.forEach(li => {
    li.style.background = 'cyan'
})
// all_li.style.