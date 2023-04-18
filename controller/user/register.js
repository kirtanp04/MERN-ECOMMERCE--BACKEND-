const UserModel = require("../../models/userModel")
const bcrypt = require("bcrypt")


const Register = async(req,res)=>{
    const{fname,lname,email,pass,city} = req.body
    try{
        const Check = await UserModel.findOne({email:email})
        if(Check){
         res.send({mess:"user exist"})
        }else{

            const hashPass = await bcrypt.hash(pass,10)
            const user = new UserModel({
            fname,
            lname,
            email,
            city,
            password:hashPass
        })
        user.save()
        res.status(201).send({mess:"success"})
    }


    }catch(e){
        res.status(500).send({mess:"error in signup"})
    }
}
module.exports=Register