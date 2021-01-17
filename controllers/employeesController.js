const mysql = require('mysql')
const pool = require('../mysql/connections')

const getUsers = (req,res) => {
    res.send("Getting Employess")
}

const getUsersById = (req,res) => {
    let id = req.params.id
    res.send(`employee number ${id}`)
}



const getUserByFirstname = (req,res) => {
    let firstnames = req.params.firstname
    let sql = `SELECT * FROM employees WHERE first_name =  '${firstnames}'` 
    sql = mysql.format(sql)
    pool.query(sql, (err, rows) => {
    if (err){ 
        return res.status(500).send('An unexpected error occurred')
    }
    return res.json(rows)
  });
}



module.exports = {
    getUsers, getUsersById, getUserByFirstname
}