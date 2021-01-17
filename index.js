const express = require("express")
const app = express()

const port = process.env.port || 4001;

const employeeRoutes = require("./routes/employees")
const departmentRoutes = require("./routes/departments")

//Routes
app.get('/', (req,res) => {
    res.json("Welcome to our API")
})

app.use('/employees', employeeRoutes)
app.use('/departments', departmentRoutes)

app.listen(port, () => {
    console.log('Server Started...')
})