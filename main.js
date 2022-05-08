const choices = ["rock", "paper", "scissors"];
const userChoice = prompt("please choose rock or paper or scissors");
if (userChoice) {
    console.log(`You choose ${userChoice} `);
}else {
    console.log("You cheated");
}
const randomNumber = Math.floor(Math.random() * 3);
const computerChoice = choices[randomNumber];
console.log(`Computer chooses: ${computerChoice}`);

if (userChoice === computerChoice) {
    console.log("it is a tie");
}else if (userChoice === "rock") {
    if (computerChoice === "scissors") {
        console.log ("You win!");
    } else {
        console.log("You lose!");
    }
}else if (userChoice === "paper") {
    if (computerChoice === "rock") {
        console.log ("You win!");
    } else {
        console.log("You lose!");
    }
} else if (userChoice === "scissors") {
    if (computerChoice === "paper") {
        console.log ("You win!");
    } else {
        console.log("You lose!");
    }
}  

