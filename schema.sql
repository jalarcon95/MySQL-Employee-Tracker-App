DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,

    dept_name VARCHAR(50) NOT NULL,

    PRIMARY KEY(id)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,

    title VARCHAR(50) NOT NULL,

    salary DECIMAL(10,2) NOT NULL,

    department_id INT NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,

    first_name VARCHAR(50) NOT NULL,

    last_name VARCHAR(50) NOT NULL,

    role_id INT NOT NULL,

    manager_id INT,

    PRIMARY KEY (id)
);