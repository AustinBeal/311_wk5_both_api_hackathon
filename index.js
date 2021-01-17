const express = require("express")
const app = express()

const port = process.env.port || 4001;

const employeeRoutes = require("./routes/employees")
//AUSTINS THINGS
const salariesRoutes = require("./routes/salaries")

//Routes
app.get('/', (req,res) => {
    res.json("Welcome to our API")
})

app.use('/employees', employeeRoutes)
//AUTSINS THINGS

app.use('/salaries', salariesRoutes)

app.listen(port,()=>{
    console.log('Server Started...')
})