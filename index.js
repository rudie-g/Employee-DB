const config = require("./config.js");
const connection = require("./connection.js");
const inquirer = require('inquirer');

function init() {
    inquirer.prompt({
        type: "list",
        message: "Thank you for using Employee-DB, what can I do for you today?",
        choices: [
            "View Departments",
            "View Employees",
            "View Employee Roles",
            "View Managers",
            "Add Employee",
            "Add Manager",
            "Add Employee Role",
            "Add Department",
            "Update Employee",
            "Update Manager",
            "Update Employee Role",
            "View Employees By Manager",
            "Disconnect"
        ],
        name: "cont"
    })
    .then(function(choice) {
        if (choice.cont !== "Disconnect") {
            switch (choice.cont) {
                case "View Departments":
                    config.theDepartments()
                    .then(() => init())
                break;
                case "View Employees":
                    config.theEmployees()
                    .then(() => init())
                break;
                case "View Employee Roles":
                    config.theEmployeeRoles()
                    .then(() => init())
                break;
                case "View Managers":
                    config.theManagers()
                    .then(() => init())
                break;
                case "Add Employee":
                    addEmployeeInq()
                    .then(() => init())
                break;
                case "Add Manager":
                    addManagerInq()
                    .then(() => init())
                break;
                case "Add Employee Role":
                    addEmployeeRoleInq()
                    .then(() => init())
                break;
                case "Add Department":
                    addDepartmentInq()
                    .then(() => init())
                break;
                case "Update Employee":
                    updateEmployeeInq()
                    .then(() => init())
                break;
                case "Update Employee Role":
                    updateEmployeeRoleInq()
                    .then(() => init())
                break;
                case "Update Manager":
                    updateManagerInq()
                    .then(() => init())
                break;
                case "View Employees By Manager":
                    viewByManagerInq()
                    .then(() => init())
                break;
            }
        } else {
            console.log("Thank you for using Employee-DB, goodbye!");
            connection.end();
        }
    })
}


function addEmployeeInq() {};

function addEmployeeRoleInq() {};

function addDepartmentInq() {};

function addManagerInq() {};

function updateEmployeeInq() {};

function updateEmployeeRoleInq() {};

function updateManagerInq() {};

init();