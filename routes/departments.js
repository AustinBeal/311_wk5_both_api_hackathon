const { Router } = require('express')
const express = require('express')
const router = express.Router()

const departmentController = require('../controllers/departmentsController')

//GET REQUESTS
router.get('/', departmentController.getDepartments)

router.get('/:dept_no', departmentController.getDepartmentsByNo)

router.get('/dept_name/:dpt', departmentController.getEmployeesByDepartmentName)


module.exports = router