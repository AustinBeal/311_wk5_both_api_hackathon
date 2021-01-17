const express = require("express")
const router = express.Router()

const employeeControllers = require("../controllers/employeesController")

router.get('/', employeeControllers.getUsers)

router.get('/:id', employeeControllers.getUsersById)

router.get('/firstname/:firstname', employeeControllers.getUserByFirstname)


module.exports = router