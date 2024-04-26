#! /usr/bin/env node
import inquirer from "inquirer";
//Creating a empty array in which we will push our tasks
let todoList = [];
console.log("WELCOME TO MY TODO-LIST APPLICATION");
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "Task",
            type: "input",
            message: "Enter your task"
        }
    ]);
    //Adding the tasks in our array by using push method
    todoList.push(addTask.Task);
    console.log(`${addTask.Task} You have been Added a Task!`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more task",
            default: "False"
        }
    ]);
    condition = addMoreTask.addMore;
}
//printing our tasks
console.log("Your todo list:", todoList);
