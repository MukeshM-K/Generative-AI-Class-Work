#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 33442;
let pinAnswer = await inquirer.prompt({
    name: "pincode",
    type: "number",
    message: "Enter Your Pin"
});
if (pinAnswer.pincode === myPin) {
    console.log("Correct Pin Code!!!");
    let operationAns = await inquirer.prompt([{
            name: "operation",
            message: "Please Select Option",
            type: "list",
            choices: ["withdraw", "check balance",]
        }]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "Enter Your Amount",
                type: "number"
            }]);
        myBalance -= amountAns.amount;
        console.log("your remaining balance is: " + myBalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("Your balance is: " + myBalance);
    }
}
else {
    console.log("Incorrect Pin Number");
}
