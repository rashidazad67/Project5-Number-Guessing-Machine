#! usr/bin/env node
import inquirer from "inquirer";

console.log("Welocme to RS CLI Guessing Number Game");

const randomNumber = Math.floor(Math.random() * 5+1);

const answer = await inquirer.prompt([
    {
        name: "userGuesseNumber",
        type: "number",
        message: "Guess a Number (1 to 5):",
    },
]);
if(answer.userGuesseNumber === randomNumber){
    console.log("Congratulations! You Guessed a Correct Number");
}
else{
    console.log("Sorry, You Guessed an Incorrect Number");
}