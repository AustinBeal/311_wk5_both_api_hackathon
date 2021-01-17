const mysql = require('mysql')
const pool = require('../mysql/connections')

const getSalaries = (req,res) => {
    let sql = 'SELECT * FROM salaries LIMIT 50'
    sql = mysql.format(sql)

    pool.query(sql, (err, rows) => {
        if (err) return res.status(500).send("something went wrong")
        return res.json(rows)
    })
}

const getEmpNoSalaries = (req,res) => {
    let id = req.params.emp_no
    let sql = `SELECT * FROM salaries WHERE emp_no = '${id}'`
    sql = mysql.format(sql)

    pool.query(sql, (err, rows) => {
        if (err) return res.status(500).send("something went wrong")
        if (id < 10001) return res.send('Numbers start from 10001')
        return res.json(rows)
    })
}



module.exports = {
    getSalaries, getEmpNoSalaries
}