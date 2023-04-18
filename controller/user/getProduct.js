const productModal = require("../../models/productModal")


const getAllProduct = async(req,res)=>{
    try{
        const datas = await productModal.find()
        res.status(201).send(datas)
    }catch{
        res.status(500).send({mess:"server error"})
    }
}


module.exports = getAllProduct
