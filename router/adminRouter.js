const express = require("express")
const adminLogin = require("../controller/admin/login")
const addproduct = require("../controller/admin/addProduct")
const adminAuth = require("../middleware/adminAuth")
const addCategories = require("../controller/admin/addCategories")
const getCategories = require("../controller/admin/getCategories")
const totalData = require("../controller/admin/totalData")
const Adminrouter = express.Router()

Adminrouter.post("/login",adminLogin)

// Products
Adminrouter.post("/addproduct",addproduct)


// middleware
Adminrouter.get("/adminauth",adminAuth)


// categories

Adminrouter.post("/addcategories",addCategories)
Adminrouter.get("/getcategories",getCategories)

// full data

Adminrouter.get("/totaldata",totalData)




module.exports = Adminrouter