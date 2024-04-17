#! /usr/bin/env node

import inquirer from "inquirer";
 const currency: any = {
    USD: 1,
    EUR: 0.91,
    INR: 80,
    GBP: 76.65,
    PKR: 278,
 };
let user_answer = await inquirer.prompt([{
    name: "from",
    message: "Enter From Currency",
    type: "list",
    choices: ["USD", "GBP", "INR", "PKR", "EUR"]
},
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "GBP", "INR", "PKR", "EUR"]
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number"
    }
    
])


let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount

console.log(convertedAmount);



