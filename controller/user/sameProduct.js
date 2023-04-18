const productModal = require("../../models/productModal")


const sameProduct = async(req,res)=>{
    const {name} = req.params
    try{
        const data = await productModal.find({name:name})
        res.status(202).send(data)
    }catch{
        res.status(500).send({mess:"error to get same product"})
    }
}

module.exports = sameProduct