const express = require("express")
const app = express()

const port = process.env.port || 4001;

const employeeRoutes = require("./routes/employees")
const salariesRoutes = require("./routes/salaries")
const departmentRoutes = require("./routes/departments")


//Routes
app.get('/', (req,res) => {
    res.json("Welcome to our API")
})

app.use('/employees', employeeRoutes)
app.use('/salaries', salariesRoutes)
app.use('/departments', departmentRoutes)


app.listen(port, () => {
    console.log('Server Started...')
})