const adminRoute = require('express').Router();
const pool = require('../db').pool;

// create user
adminRoute.route('/user/create').post(async (req,res)=>{
    const { fname, lname, email, phonenum, dept, mname, role } = req.body;
    
    let query = `SELECT dept_id FROM department WHERE dept_name='${dept}'`;
    let result = await pool.query(query);
    if(result.rows.length === 0){
        res.status(400).send("Cannot find department");
        return;
    }
    const dept_id = result.rows[0].dept_id;

    const pass = (Math.random() + 1).toString(36).substring(5);

    query = `INSERT INTO employee (first_name, last_name, email, phone_number, dept_id, manager, password, role) VALUES ('${fname}','${lname}','${email}',${phonenum},'${dept_id}','${mname}','${pass}','${role}');`
    result = await pool.query(query);

    if(result.rowCount === 0){
        res.status(400).send("Cannot create employee");
        return;
    }

    res.status(200).send({message:"User created successfully",temp_password:pass});
});

//create department
adminRoute.route('/dept/create').post(async (req,res)=>{
    const {did, dname, bno} = req.body;

    let query = `INSERT INTO department VALUES ('${did}', '${dname}', ${bno});`;
    const result = await pool.query(query);
    
    if(result.rowCount === 0){
        res.status(400).send("Error in creating");
        return;
    }

    res.status(200).send("Created department");
    
});

module.exports = adminRoute;