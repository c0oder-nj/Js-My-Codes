const joke = new Array(10)
let i=0
while(i<10){
    joke[i] = `Hey there I am joke ${i+1}`
    i++
}
// console.log(joke,typeof joke)

let min=0
let max = 10 // both the values are inclusive

let rand_num = Math.floor(Math.random() * ((max-min)+1)) + min
console.log(rand_num)
let joke_ele = document.getElementById('joke')
joke_ele.innerHTML = joke[rand_num]
