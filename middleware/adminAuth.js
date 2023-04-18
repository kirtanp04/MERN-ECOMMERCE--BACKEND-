const jwt = require("jsonwebtoken")

const adminAuth = (req,res,next) =>{
    try{
        const token = req.cookies.admin
        // console.log(token)
        const verifyToken = jwt.verify(token,process.env.JWT)
        // console.log(verifyToken)
        if(verifyToken){
            res.send({mess:"success"})
            next()
        } 

    }catch{
        res.status(500).send({mess:"not authorize"})
    }
}

module.exports = adminAuth