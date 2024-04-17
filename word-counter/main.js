#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
const answers = await inquirer.prompt([{
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count words:"
    }]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(chalk.yellow(`Your sentence word count is ${words.length}`));
