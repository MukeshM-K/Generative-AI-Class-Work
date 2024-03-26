#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([{
        name: "firstNumber",
        type: "number",
        message: "Enter Your First Number"
    },
    {
        name: "secondNumber",
        type: "number",
        message: "Enter Your Second Number",
    },
    {
        message: "select one of the operator to perform operatation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division", "Exponentation", "Modules", "Increment"]
    }
]);
if (answer.operator === "Addition") {
    console.log(chalk.white(answer.firstNumber + answer.secondNumber));
}
else if (answer.operator === "Substraction") {
    console.log(chalk.blue(answer.firstNumber - answer.secondNumber));
}
else if (answer.operator === "Multiplication") {
    console.log(chalk.black(answer.firstNumber * answer.secondNumber));
}
else if (answer.operator === "Division") {
    console.log(chalk.yellow(answer.firstNumber / answer.secondNumber));
}
else if (answer.operator === "Exponentation") {
    console.log(chalk.yellow(answer.firstNumber ** answer.secondNumber));
}
else if (answer.operator === "Modules") {
    console.log(chalk.yellow(answer.firstNumber % answer.secondNumber));
}
else if (answer.operator === "Increment") {
    console.log(chalk.yellow(answer.firstNumber++ + answer.secondNumber));
}
