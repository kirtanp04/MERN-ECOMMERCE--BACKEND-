const express = require("express")
require("dotenv").config()
const cors = require("cors")
const cookieParser = require('cookie-parser')
const ConnectDB = require("./db")
const Userrouter = require("./router/userRouter")
const Adminrouter = require("./router/adminRouter")
const app = express()

app.use(cookieParser())
app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb'}));
app.use(cors({
    origin:["https://kirtanp04-ecommerce.netlify.app"],
    credentials:true
}))
ConnectDB()
const PORT = process.env.PORT || 9000

// Routing for user
app.use("/user",Userrouter)

// Routing for Admin
app.use("/admin",Adminrouter)



app.listen(PORT,()=>{
    console.log(`server is running on ${PORT} Port`)
})