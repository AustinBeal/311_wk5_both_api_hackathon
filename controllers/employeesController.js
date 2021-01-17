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
    let firstName = req.params.firstname
    res.send(`employee's firstname is ${firstName}`)
}

module.exports = {
    getUsers, getUsersById, getUserByFirstname
}