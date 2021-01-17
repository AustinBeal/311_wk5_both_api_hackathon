const mysql = require('mysql')
const pool = require('../mysql/connections')

const getDepartments = (req, res) => {
    let sql = 'SELECT * FROM departments'
    sql = mysql.format(sql)

    pool.query(sql, (err, rows) => {
        if (err) return res.status(500).send("something went wrong")
        return res.json(rows)
    })
}

const getDepartmentsByNo = (req,res) => {
    let id = req.params.dept_no
    let sql = `SELECT * FROM departments WHERE dept_no = '${id}'`
    sql = mysql.format(sql)

    pool.query(sql, (err, rows) => {
        if (err) return res.status(500).send("something went wrong")
        //Tried to get this to catch poorly formatted queries, but failed   D:
        if (rows === '[]') return res.send("Department queries should be between d001 - d009")
        return res.json(rows)
    })
}

const getEmployeesByDepartmentName = (req,res) => {
    let deptName = req.params.dpt
    let sql = `SELECT * FROM departments
    INNER JOIN dept_emp on dept_emp.dept_no = departments.dept_no
    INNER JOIN employees on employees.emp_no = dept_emp.emp_no
    WHERE dept_name = '${deptName}'
    LIMIT 50`

    sql = mysql.format(sql)

    pool.query(sql, (err, rows) => {
        if (err) return res.status(500).send("something went wrong")
        return res.json(rows)
    })
}

module.exports = {
    getDepartments, getDepartmentsByNo, getEmployeesByDepartmentName
}