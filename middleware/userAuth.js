const jwt = require("jsonwebtoken")

const userAuth = async(req,res,next)=>{
    try{
        const token = req.cookies.user
        const checkToken = jwt.verify(token,process.env.JWT)
        if(checkToken){
            req.ID = checkToken.id
            next()
        }
    }catch{
        res.status(500).send({mess:"error to verify user"})
    }
}

module.exports = userAuth