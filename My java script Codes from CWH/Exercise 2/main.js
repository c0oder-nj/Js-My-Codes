const max = 3
const min = 1

alert("Welcome to snake water gun game")
let user_input
let user_score = 0

while (true) {
    const rand_num = Math.floor(Math.random() * ((max - min) + 1)) + min

    let comp_choice = ''
    switch (rand_num) {
        case 1:
            comp_choice = 'S'
            break
        case 2:
            comp_choice = 'W'
            break
        case 3:
            comp_choice = 'G'
    }

    // console.log(comp_choice)

    let user_choice = prompt("Enter your Choice (S-> snake | W-> water | G-> gun")
    if (user_choice == 'S' && comp_choice == 'W') {
        alert(`Congratulations! You win You choose ${user_choice} while computer choose ${comp_choice}`)
        user_score++
        console.log(user_score)
        user_input = confirm("Do you want to play more")
        if (!user_input) {
            break
        }
    }
    else if (user_choice == 'W' && comp_choice == "G") {
        alert(`Congratulations! You win You choose ${user_choice} while computer choose ${comp_choice}`)
        user_score++
        console.log(user_score)
        user_input = confirm("Do you want to play more")
        if (!user_input) {
            break
        }
    }
    else if (user_choice == 'G' && comp_choice == 'S') {
        alert(`Congratulations! You win You choose ${user_choice} while computer choose ${comp_choice}`)
        user_score++
        console.log(user_score)
        user_input = confirm("Do you want to play more")
        if (!user_input) {
            break
        }
    }
    else if (user_choice == 'S' && comp_choice == 'S') {
        alert("Match is tie")
        console.log(user_score)
        user_input = confirm("Do you want to play more")
        if (!user_input) {
            break
        }
    }
    else if (user_choice == 'W' && comp_choice == 'W') {
        alert("Match is tie")
        console.log(user_score)
        user_input = confirm("Do you want to play more")
        if (!user_input) {
            break
        }
    }
    else if (user_choice == 'G' && comp_choice == 'G') {
        alert("Match is tie")
        console.log(user_score)
        user_input = confirm("Do you want to play more")
        if (!user_input) {
            break
        }
    }
    else {
        alert(`Oh - ho you lose you choose`)
        user_score--
        console.log(user_score)
        user_input = confirm("Do you want to play more")
        if (!user_input) {
            break
        }

    }
}

if (user_score <= 0) {
    user_score = 0
    document.write(`Your Score is ${user_score} \n Thansk for playing`)
}
else {
    document.write(`Your Score is ${user_score} \n Thansk for playing`)
}