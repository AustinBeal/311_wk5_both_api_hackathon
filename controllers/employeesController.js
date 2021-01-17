const mysql = require('mysql')
const pool = require('../mysql/connections')

const getUsers = (req,res) => {
    let sql = 'SELECT * FROM EMPLOYEES LIMIT 50'
    sql = mysql.format(sql)

    pool.query(sql, (err, rows) => {
        if (err) return res.status(500).send("something went wrong")
        return res.json(rows)
    })
}

const getUsersById = (req,res) => {
    let id = req.params.id
    let sql = `SELECT * FROM EMPLOYEES WHERE emp_no = '${id}'`
    sql = mysql.format(sql)

    pool.query(sql, (err, rows) => {
        if (err) return res.status(500).send("something went wrong")
        if (id < 10001) return res.send('Numbers start from 10001')
        return res.json(rows)
    })
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