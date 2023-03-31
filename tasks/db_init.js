const pool = require("../db").pool;

const createTableD = 
"CREATE TABLE IF NOT EXISTS DEPARTMENT (dept_id VARCHAR(5) PRIMARY KEY, dept_name VARCHAR(15), building_no INTEGER);"

const createTableE = 
"CREATE TABLE IF NOT EXISTS EMPLOYEE (emp_id SERIAL PRIMARY KEY, first_name VARCHAR(20), last_name VARCHAR(20), email VARCHAR(15), phone_number VARCHAR(10), dept_id VARCHAR(5) REFERENCES department, manager VARCHAR(30), password VARCHAR(10), role VARCHAR(20) );"

const db_func = async () =>{
    let resultsD = await pool.query(createTableD);
    console.log(resultsD)

    let resultsE = await pool.query(createTableE);
    console.log(resultsE);
};

db_func();