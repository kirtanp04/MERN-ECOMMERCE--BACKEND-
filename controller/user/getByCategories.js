const productModal = require("../../models/productModal")


const getBycategories = async(req,res) =>{
    const {name} = req.params
    try{
        const data = await productModal.find({categorie:name})
        res.status(201).send(data)
    }catch{
        res.status(500).send({mess:"error in get by categories"})
    }
}
module.exports = getBycategories