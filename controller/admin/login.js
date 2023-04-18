const UserModel = require("../../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const adminLogin = async(req,res)=>{
    const {email,pass} = req.body

    try{
        const check = await UserModel.findOne({email:email,role:true})
        if(!check){
          return  res.send({mess:"You are not admin"})
        }
        const hashpass = await bcrypt.compare(pass,check.password)
        if(!hashpass){
            return res.send({mess:"wrong pass"})
        }
        const token =  jwt.sign({id:check._id},process.env.JWT,{
            expiresIn:"7d"
        })
        // console.log(token)
        res.cookie("admin",token,{
            expire: 1800000 + Date.now(),
            httpOnly:true,
        })
        res.status(201).send({mess:"Success"})

    }catch{
        res.status(500).send({mess:"error in admin login"})
    }
}

module.exports = adminLogin