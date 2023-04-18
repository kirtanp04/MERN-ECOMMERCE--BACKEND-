const UserModel = require("../../models/userModel")


const GetUser = async(req,res)=>{
    try{
         const data = await UserModel.findById({_id:req.ID})
         res.status(201).send(data)

    }catch{
        res.status(500).send({mess:"error to get user"})
    }
}

module.exports = GetUser