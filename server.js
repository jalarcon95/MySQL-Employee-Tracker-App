const mysql = require('mysql2');
const inquirer = require('inquire');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password:'',
    database: 'employtee_db'
});