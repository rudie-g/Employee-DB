INSERT INTO departments (name)
VALUES ("Accounting");
INSERT INTO departments (name)
VALUES ("Engineering");
INSERT INTO departments (name)
VALUES ("Janitorial");
INSERT INTO departments (name)
VALUES ("HR");
INSERT INTO roles (title, salary, department_id)
VALUES ("Accountant", 50000, 1);
INSERT INTO roles (title, salary, department_id)
VALUES ("Engineer", 100000, 2);
INSERT INTO roles (title, salary, department_id)
VALUES ("Janitor", 120000, 3);
INSERT INTO roles (title, salary, department_id)
VALUES ("HR Person", 25000, 4);
INSERT INTO managers (first_name, last_name, salary, department_id)
VALUES ("Arthur", "Dent", 25000, 1);
INSERT INTO managers (first_name, last_name, salary, department_id)
VALUES ("John", "Hamm", 35000, 2);
INSERT INTO managers (first_name, last_name, salary, department_id)
VALUES ("Jane", "Doe", 35000, 3);
INSERT INTO managers (first_name, last_name, salary, department_id)
VALUES ("Janette", "Doe", 40000, 4);
INSERT INTO managers (first_name, last_name, salary, department_id)
VALUES ("Jan", "Doh", 45000, 2);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Birbiglia", 1, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Sean", "McArthur", 2, 2);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Jake", "Snake", 3, 3);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("George", "Sneen", 4, 4);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Joe", "Snake", 2, 5);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Andrew", "Birbiglia", 2, 2);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Sia", "Johnson", 2, 5);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Steve", "Johnson", 2, 5);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Geoff", "Sneen", 3, 4);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Bill", "Seitz", 3, 5);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Delos", "Harriman", 3, 4);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Paul", "Lafargue", 3, 5);