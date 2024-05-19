import inquirer from "inquirer";
let myBalance = 10000; // Dollars
let myPin = 1234;
let myAccount = 12345678912345;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your Pin Code:",
    },
]);
if (pinAnswer.pin === myPin)
    console.log("Correct pin code!!!");
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "Please select option:",
        choices: ["withdraw", "Check Balance", "transfer money"],
    },
]);
console.log(operationAns);
if (operationAns.operation === "withdraw") {
    let selectedAmount = await inquirer.prompt([
        {
            name: "amount",
            message: "Please select your amount",
            type: "list",
            choices: ["1000", "2000", "5000", "other amount"],
        },
    ]);
    console.log(selectedAmount);
    if (selectedAmount.amount === "1000") {
        myBalance -= selectedAmount.amount;
        console.log("Your remaining balance is:" + myBalance);
    }
    else if (selectedAmount.amount === "2000") {
        myBalance -= selectedAmount.amount;
        console.log("Your remaining balance is:" + myBalance);
    }
    else if (selectedAmount.amount === "5000") {
        myBalance -= selectedAmount.amount;
        console.log("Your remaining balance is:" + myBalance);
    }
    else if (selectedAmount.amount === "other amount") {
        let enterAmountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        if (enterAmountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= enterAmountAns.amount;
            console.log("Your remaining balance is:" + myBalance);
        }
    }
}
else if (operationAns.operation === "Check Balance") {
    console.log("your current balance is:" + myBalance);
}
else if (operationAns.operation === "transfer money") {
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "number",
            message: "Please Enter 14 Digit Account Number:",
        },
    ]);
    console.log(operationAns);
    if (operationAns.operation === myAccount)
        console.log("Correct Account Number!");
    let enterAmountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "Enter your amount",
            type: "number",
        },
    ]);
    if (enterAmountAns.amount > myBalance) {
        console.log("Insufficient Balance");
    }
    else {
        myBalance -= enterAmountAns.amount;
        console.log("Money Transferred successfully. Your remaining balance is:" + myBalance);
    }
}
else {
    console.log("Incorrect Pin Number, Please Enter valid Pin");
}
