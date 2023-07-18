const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require("console.table");
const dotenv = require('dotenv');
dotenv.config()

const connection = mysql.createConnection(
    {
    port: 3306,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    },
    console.log('Connection Successful!')
);

connection.connect(function(err){

    if (err) throw err;

    console.log("connected as id " + connection.threadId);

    startScreen();
   
});

function startScreen() {
    inquirer.prompt({
        name: "option",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View departments",
            "View roles",
            "View employees",
            "Add department",
            "Add role",
            "Add employee",
            "Update employee role",
            "Close App"
        ],
    
    })
    .then(function(result) {
        console.log("You entered: " + result.option);

        switch (result.option) {
            case "View departments":
                viewDepartment();
                break;
            case "View roles":
                viewRoles();
                break;
            case "View employees":
                viewEmployees();
                break;
            case "Add department":
                addDepartment();
                break;
             case "Add role":
                addRole();
                break;
            case "Add employee":
                addEmployee();
                break;
            case "Update employee role":
                updateEmployee();
                break;
            default:
                quit();
        }
    });
}

function viewDepartment() {
    let query = "SELECT * FROM department";
    connection.query(query, function(err, res) {
        if(err) throw err;
        console.table(res);
        startScreen();
    });
}

function viewRoles() {
    let query = "SELECT * FROM role";
    connection.query(query, function(err, res) {
        if(err) throw err;
        console.table(res);
        startScreen();
    });

}function viewEmployees() {
    let query = "SELECT * FROM employee";
    connection.query(query, function(err, res) {
        if(err) throw err;
        console.table(res);
        startScreen();
    });
}

function addDepartment() {
    inquirer.prompt({

        type:"input",
        message: "Give the department a name.",
        name: "deptName"

    }).then(function(answer) {

        connection.query("INSERT INTO department (dept_name) VALUES (?)", [answer.deptName], function(err, res) {
            if(err) throw err;
            console.table(res)
            startScreen()
        })

    })
}
