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
            message: "Enter the department ID: ",
            name: "roleId"
        }
    ])
    .then (({title, salary, department_id}) => {
        config.addEmployee(title, salary, department_id)
        .then(() => {init();});
    })
};

function addDepartmentInq() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter department name: ",
            name: "departmentName"
        }
    ])
    .then (({departmentName}) => {
        config.addDepartment(departmentName)
        .then(() => {init();});
    })
};

function addManagerInq() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter manager's first name: ",
            name: "firstName"
        },
        {
            type: "input",
            message: "Enter manager's last name: ",
            name: "lastName"
        },
        {
            type: "input",
            message: "Enter manager's salary: ",
            name: "managerSalary"
        },
        {
            type: "input",
            message: "Enter manager's department ID: ",
            name: "departmentId"
        }
    ])
    .then (({firstName, lastName, managerSalary, departmentId}) => {
        config.addEmployee(firstName, lastName, managerSalary, departmentId)
        .then(() => {init();});
    })
};

function updateEmployeeInq() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the first name of the employee you wish to update: ",
            name: "employeeFirst"
        },
        {
            type: "input",
            message: "Please enter the last name of the employee you wish to update: ",
            name: "employeeLast"
        },
        {
            type: "list",
            message: "What would you like to change?",
            choices: [
                "first_name",
                "last_name",
                "role_id",
                "manager_id"
            ],
            name: "changeKey"
        },
        {
            type: "input",
            message: "What would you like to change it to? ",
            name:"changeVal"
        }
    ])
    .then(({changeKey, changeVal, employeeFirst, employeeLast}) => {
        config.updateEmployee(changeKey, changeVal, employeeFirst, employeeLast)
        .then(() => {init();})
    })
};

function updateEmployeeRoleInq() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the first name of the employee you wish to update: ",
            name: "employeeFirst"
        },
        {
            type: "list",
            message: "What would you like to change?",
            choices: [
                "title",
                "salary",
                "department_id"
            ],
            name: "changeKey"
        },
        {
            type: "input",
            message: "What would you like to change it to? ",
            name:"changeVal"
        }
    ])
    .then(({changeKey, changeVal, roleTitle}) => {
        config.updateEmployeeRole(changeKey, changeVal, roleTitle)
        .then(() => {init();})
    })
};

function updateManagerInq() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the first name of the manager you wish to update: ",
            name: "managerFirst"
        },
        {
            type: "input",
            message: "Please enter the last name of the manager you wish to update: ",
            name: "managerLast"
        },
        {
            type: "list",
            message: "What would you like to change?",
            choices: [
                "first_name",
                "last_name",
                "salary",
                "department_id"
            ],
            name: "changeKey"
        },
        {
            type: "input",
            message: "What would you like to change it to? ",
            name:"changeVal"
        }
    ])
    .then(({changeKey, changeVal, managerFirst, managerLast}) => {
        config.updateManager(changeKey, changeVal, managerFirst, managerLast)
        .then(() => {init();})
    })
};

connection.connect((err) => {
    if (err) throw err;
    console.log("Welcome to Employee-DB!");
    init();
})