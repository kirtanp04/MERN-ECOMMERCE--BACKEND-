const express = require("express")
const Register = require("../controller/user/register")
const Login = require("../controller/user/login")
const getAllProduct = require("../controller/user/getProduct")
const getBycategories = require("../controller/user/getByCategories")
const sameProduct = require("../controller/user/sameProduct")
const userAuth = require("../middleware/userAuth")
const GetUser = require("../controller/user/getUserDetail")
const Userrouter = express.Router()


Userrouter.post("/register",Register)
Userrouter.post("/login",Login)

// product

Userrouter.get("/getproduct",getAllProduct)
Userrouter.get("/getbycategories/:name",getBycategories)
Userrouter.get("/similarproduct/:name",sameProduct)

// middleware

Userrouter.get("/getuser",userAuth,GetUser)






module.exports = Userrouter