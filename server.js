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
