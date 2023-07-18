const mysql = require('mysql2');
const inquirer = require('inquirer');
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

