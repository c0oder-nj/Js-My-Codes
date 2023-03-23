// arrays are variabeles which can hold more than one value of different data type sysntax for declaring js array
// let|var var_name = [values of different data type]
let my_arr = [19,07,21,"Niraj",true,undefined]
console.log(my_arr,' Length is ',my_arr.length)

//another way of creating array using array constructor
// let|var variable_name = new Array(length)
const const_arr = new Array(3)
console.log(const_arr," lenght is ",const_arr.length)

// in js array is a object typeof operator for arrray returns object
console.log(typeof const_arr,typeof my_arr) // object object

// Accessing values of array
console.log(my_arr[3])

/* ------- Arrays are mutable we can change array values ------- */
my_arr[3] = "Nitesh"
console.log(my_arr[3])


// now array methods
// .toString()
let arr = [1,2,3,4,"Niraj","Harsh"]
console.log(arr,typeof arr)
arr = arr.toString() // returns string represenatation of array
console.log(arr,typeof arr)

// .join(seperator) --> join all the array element using a seprator
arr = [1,2,3,4,"Niraj","Harsh"]
console.log(arr.join('--'))

// pop() --> remove last element from the array update original array return the pop value
let popped_val = arr.pop() // it will pop harsh from the array
console.log(arr, ` popped value is ${popped_val}`,arr.length)

//push(element) --> push element in the end of array | append at last | returns new array length
let len = arr.push("Harsh_pushed") 
console.log(arr,` New length is ${len}`)

//shift() --> remove first element (element at beginning) and returns it
let first_ele = arr.shift() // it changes original array | similar to pop() but works at beginning
console.log(arr," removed first element is ",first_ele, arr.length)


//unshift() --> add elemenet at beginning and returns new array length 
len = arr.unshift("1 as a string") // it changes original array | similar to push() but works at begining
console.log(arr,` New length is ${len}`)

// delete --> array element can be delete using the delete operator 
delete arr[0] // it will delete array item at position 0 and make this place vacent so it will show empty when we print array
console.log(arr)
arr[0] = "val after delete"
console.log(arr)
// delete arr // it can't be used for deleting the entire array


// concat() --> used for concatenating arrays | returns new array does not change the existing one 

let arr2 = ["I","am ","Array 2"]
let arr3 = ["I","am ","array 3"]

console.log(arr.concat(arr2,arr3))


// .sort() --> used to sort he array alphabatically first neumeric then capital then small
arr = ["A",'b','a','8',1,'Z'] // it changes the original array
console.log(arr.sort()) // it can take a optional function compare as a parameter to sort in desecending ascending jaisa chaho vaisa lets try

let compare = (a,b)=>{
    return a-b // if b-a sort in descending order | a-b sort in ascending order
}

arr = [88,65,41,2,1,69,87,53]
console.log(arr.sort(compare))


// splice() --> used to add element to an array or modifies the array

console.log(arr)
arr.splice(2,3,"41","53","65") // splice() takes 3 parameter in which third one is optional
// first index position from where you want to remove elements.
// second is how many elements you want to remove from specified position
// third one is elements you want to insert at the place of removed elements 
// it changes the original array 
// it returns the array object of delete values lets check
console.log(arr)

// now the question is kya ye size ko bhi kam kr dega if we only delete elements but not insert element in it let's see
let deleted_arr = arr.splice(2,3)
console.log(arr,arr.length,deleted_arr)

// so the answer of question is yes ye size bhi kam kr dega jo ki delete nahi kr raha tha vo sirf element hata raha tha

// slice() --> used for array slicing arrays se subarrays banana
console.log(arr)
let sliced_arr = arr.slice(2) // index no. 2 se end tak array ko slice krdo
// it returns an array object that is our sliced array
sliced_arr = arr.slice(1,4) // from index 1 to 3 (4-1) [2,69,87]
console.log(sliced_arr)


//reverse() --> used to reverse the array
console.log(arr)
arr.reverse() // changes the original array
console.log(arr)


// ----- Looping through arrays ---------
// forEach loop is used for array especiallly

console.log("\n",arr)

//classical for loop
for(let i=0; i<arr.length; i++){
    console.log(` value at index ${i} is ${arr[i]}`)
}

console.log('')
arr.forEach((val,index)=>{ // index and array are my optional parameters
    console.log(` value at index ${index} is ${val}`)
})

// .from() is used to create array object from any other object e.g. kisi bhi web page me html collections hoti hai toh us html collection ko array me convert krna let's try at codewithharry.com
let arr_from = Array.from("Niraj")
console.log(arr_from) // create an array of length 5 containing N i r a j

// for of loop is used over iterable object so array is also iterable object let's chalao

for(val of arr){ // val of arr returns value but below example | more convient to print array elements
    console.log(val)
}


//for in loop --> val in arr returns index 
for(val in arr){ // since in js object it gives us key so array me bhi ye key de raha hai bs array ki keys dikhti nahi hai vo as an index hoti hai js me 
    console.log(arr[val])
}


// ---- now map() , filter() and reduce()-------
// these mehtods are higher order array methods used in modern js

// map() --> this function creates a new array by performing some oeprations on each element of the array
// it takes three parameter value, index, array

arr.reverse()
console.log(arr)
let new_arr = arr.map((value,index,arr)=>{ // index and array are my optional parameters
    let a = `I'm index ${index} my value is ${value} I came from ${arr}`
    return a
})

console.log(new_arr)

// we use map when we want to create new array and we use forEach when we want to perform some specific operations on the array


//filter() --> method used to filter the array based on specified case or condition and returns the new array with the elements who passes the case 
console.log('\n',arr)
new_arr = arr.filter((val)=>{ // index and array are the optional parameters
    return val<70
})

console.log(new_arr) // we filter our array condition array values should be less than 70


// reduce() --> reduces the array to a single value 

// console.log('\n',new_arr)
console.log('\n',arr)
sumOfArr = arr.reduce((val1,val2,index,arr)=>{ //val1 is previous value val2 is current value|index arr is optional| index of current val
    return val1+val2
})
//reduce returns a value after performing some operations on each array element
console.log(sumOfArr)