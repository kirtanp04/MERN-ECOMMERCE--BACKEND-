const UserModel = require("../../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const Login = async(req,res)=>{
    const{email,pass} = req.body
    try{
        const check = await UserModel.findOne({email:email})
        if(!check){
            return res.send({mess:"user not found"})
        }
        const password = await bcrypt.compare(pass,check.password)
        if(!password){
            return res.send({mess:"invalid pass"})
        }

        const token =  jwt.sign({id:check._id},process.env.JWT,{
            expiresIn:"7d"
        })
        // console.log(token)
        res.cookie("user",token,{
            expire: 1800000 + Date.now(),
            httpOnly:true,
        })
        res.status(201).send({mess:"login success"})

    }catch{
        res.status(500).send({mess:"error in login"})
    }
}

module.exports = Login