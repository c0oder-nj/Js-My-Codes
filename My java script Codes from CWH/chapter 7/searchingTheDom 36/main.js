// now in order to searching dom my first task is to convert this cart title to nature

let ctitle = document.getElementsByClassName('card-title') // ye mujhe ek html collection dega toh us pr toh me innerhtml apply nahi kr skta isliye mujhe [0] likhan padega us element ko target krne ke liye fir us pr innerHTML apply kr dunga let's try


ctitle = document.getElementsByClassName('card-title')[0]
ctitle.innerHTML = "Nature" // so this will change my title text to nature that is how we can search and target dom elements 

// we have various methods for targeting and searching dom elements 
// let's see some of them



// document.getElementById() // this method is used to search element with their id // pass id as parameter // returns a js object
// i give id home to my home navigation menu

console.log(typeof document.getElementById('home')) // type of this is object 

// now my task is to change the color and text to ghar

let home = document.getElementById('home')
// home.style.color = 'red'
// home.innerHTML = "Ghar"
// --- imp note
// in the console I can directly write home to get home element because id unique hoti hai 


// document.querySelectorAll() // it will returns all the elements whose mathces with our given css query selector as parameter ex. se smjh jayenge

// types of css selectors
// type selector --> html tag ki help se select krte hai h1{ your css } 
// universal selector --> sab kuchh jab select krna ho *{margin:0px; padding:0px}
// class selector --> jab kisi class ki help se select krna ho .class_name{ your css }
// id select ---> jab id ki help se select krna ho #id_name{ your css }
// descendent selector --> jab koi element kisi or element ke andr ho eg. child inside the parent 
// e.g. .container ul li a{ your css goes here}

// but in querySelectorAll() 
// document.querySelectorAll('div.container > p') --> this means vo p select kro jiska immediate parent div hai jiski class container hai 

// now implementation of querySelectorAll()

let nav_items = document.querySelectorAll('.navbar-nav > li') // give me nodelist of novigation items 
// node list of li inside the li I have a tag of which color I want to change so for accessing them we can write like this 
// now changing colors of navigation menu
console.log(nav_items)
nav_items[0].firstElementChild.style.color = 'red'
nav_items[1].firstElementChild.style.color = 'green'
nav_items[2].firstElementChild.style.color = 'blue'
nav_items[3].firstElementChild.style.color = 'orange' 
// nice :)



// document.querySelector() // this will give me first html element with the given query 

// take first navigation menu item that is home 

let home2 = document.querySelector('#home') // id selector I am using
home2.innerHTML = 'Ghar2'


// document.getElementsByTagName() // get the elements by their tags
let all_divs = document.getElementsByTagName('div')
console.log(all_divs) // this will return me an html collection for all the div's of our web page

console.log(all_divs[0])// we can use this type of things in html collection as well as in js objects but can't use all array methods // jyada serious mt lena

// document.getElementsByClassName() // returns all the html elemetn with specified  // html collection
let all_elem_ofClass = document.getElementsByClassName('nav-item')
console.log(all_elem_ofClass)

let my_arr = Array.from(all_elem_ofClass)
console.log(my_arr,typeof my_arr) // converts object into array

// -- imp note ye jitni bhi methods hai jaruri nahi ki sirf documents pr chale uske further body kis div par bhi chal skti hai eg.

// console.log(document.querySelectorAll('.nav-item').getElementById('home'))

// document.getElementsByName() // search elements by name form element or element jisme name attribute specify hai 
let search_input = document.getElementsByName('search')
console.log(search_input)
