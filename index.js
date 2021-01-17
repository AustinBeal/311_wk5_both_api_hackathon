const express = require("express")
const app = express()

const port = process.env.port || 4001;

const employeeRoutes = require("./routes/employees")


//Routes
app.get('/', (req,res) => {
    res.json("Welcome to our API")
})

app.use('/employees', employeeRoutes)

app.listen(port,()=>{
    console.log('Server Started...')
})