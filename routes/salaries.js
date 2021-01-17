const express = require("express")
const router = express.Router()

const salariesControllers = require("../controllers/salariesController")

router.get('/', salariesControllers.getSalaries)

router.get('/:emp_no', salariesControllers.getEmpNoSalaries)

module.exports = router