let str = "         niraj "
str = str.trim()
str = str.replace(/\s+/g,' ')
let len = 0
console.log(str)
let str_array = str.split(' ')
console.log(typeof str_array[0])
console.log(str_array)
if(str_array.length == 1 && (str_array[0] == ' ' || str_array[0] == '')){
    len = 0   
}
else{
    len = str_array.length
}
console.log(len)
// str = str.split(' ')
// console.log(str,typeof str)
// let reg_exp = RegExp(' ','g')

// str = str.replaceAll()