const connection = require("./connection.js");

const config = {
    theDepartments: function() {
        return new Promise(function(resolve, reject) {
            connection.query("SELECT * FROM departments", function(err, res) {
                if (err) return reject(err);
                console.table(res);
                return resolve();
            });
        });
    },

    theEmployees: function() {
        return new Promise(function(resolve, reject) {
            connection.query("SELECT employees.id, employees.first_name, employees.last_name, employees.manager_id, roles.title, roles.salary, departments.name FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN departments ON roles.dept_id = departments.id", function(err, res) {
                if (err) return reject(err);
                let employeeObjArr = [];
                for (let i = 0; i < res.length; i++) {
                    const employeeObj = {
                        "First Name": res[i].first_name,
                        "Last Name": res[i].last_name,
                        "Title": res[i].title,
                        "Salary": res[i].salary,
                        "Department": res.name,
                        "Manager ID": res.manager_id,
                        "ID": res.id
                    };
                    employeeObjArr.push(employeeObj);
                }
                console.table(employeeObjArr);
                return resolve();
            });
        });
    },

    theEmployeeRoles: function() {
        return new Promise(function(resolve, reject) {
            connection.query("SELECT * FROM roles", function(err, res) {
                if (err) return reject(err);
                console.table(res);
                return resolve();
            });
        });
    },

    theManagers: function() {
        return new Promise(function(resolve, reject) {
            connection.query("SELECT managers.id, managers.first_name, managers.last_name, managers.salary, departments.name FROM managers LEFT JOIN departments on managers.department_id = departments.id", function(err, res) {
                if (err) return reject(err);
                let managerObjArr = [];
                for (let i = 0; i < res.length; i++) {
                    const managerObj = {
                        "First Name": res[i].first_name,
                        "Last Name": res[i].last_name,
                        "Salary": res[i].salary,
                        "Department": res.name,
                        "ID": res.id
                    };
                    managerObjArr.push(managerObj);
                }
                console.table(managerObjArr);
                return resolve();
            });
        });
    },

    addEmployee: function() {},

    addEmployeeRole: function() {},

    addDepartment: function() {},

    addManager: function() {},

    updateEmployee: function() {},

    updateEmployeeRole: function() {},

    updateManager: function() {}
}

module.exports = config;