const prompt = require('prompt-sync')()
// 1
const num = new Array()
// len  = Number.parseInt(prompt("Enter the length of an array: "))
console.log("Enter intial five elements")
for(let i=0; i<5; i++){
    if(i==0){
        let first_ele = Number.parseInt(prompt(`Enter your value for index ${i}: `))
        num.unshift(first_ele)
    }
    else{
        let a = Number.parseInt(prompt(`Enter your value for index ${i}: `))
        num.push(a)
    }
}

console.log(num)


// 2
while(true){
    n = Number.parseInt(prompt())
    if(n == 0){
        break
    }
    else{
        num.push(n)
        console.log(num)
    }
}

// 3
let new_arr = num.filter((val)=>{
    return (val%10==0)
})

console.log(new_arr)

//4 
new_arr = num.map((val)=>{
    return val*val
})

console.log(new_arr)

//5
let fact = num.reduce((x,y)=>{
    return x*y
})

console.log(fact)