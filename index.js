const config = require("./config.js");
const connection = require("./connection.js");
const inquirer = require('inquirer');

function init() {
    inquirer.prompt({
        type: "list",
        message: "Main Menu:",
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


function addEmployeeInq() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter employee's first name: ",
            name: "firstName"
        },
        {
            type: "input",
            message: "Enter employee's last name: ",
            name: "lastName"
        },
        {
            type: "input",
            message: "Enter employee's role ID: ",
            name: "roleId"
        },
        {
            type: "input",
            message: "Enter employee's manager ID: ",
            name: "managerId"
        }
    ])
    .then (({firstName, lastName, roleId, managerId}) => {
        config.addEmployee(firstName, lastName, roleId, managerId)
        .then(() => {init();});
    })
};

function addEmployeeRoleInq() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter the title of the role: ",
            name: "roleTitle"
        },
        {
            type: "input",
            message: "Enter the annual salary: ",
            name: "roleSalary"
        },
        {
            type: "input",
            message: "Enter the department ID: \n  Accounting = 1 \n Engineering = 2 \n Janitorial = 3 \n HR = 4",
            name: "roleId"
        },
        {
            type: "input",
            message: "Enter employee's manager ID: ",
            name: "managerId"
        }
    ])
    .then (({firstName, lastName, roleId, managerId}) => {
        config.addEmployee(firstName, lastName, roleId, managerId)
        .then(() => {init();});
    })
};

function addDepartmentInq() {};

function addManagerInq() {};

function updateEmployeeInq() {};

function updateEmployeeRoleInq() {};

function updateManagerInq() {};

connection.connect((err) => {
    if (err) throw err;
    console.log("Welcome to Employee-DB!");
    init();
})