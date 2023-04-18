const categorieModal = require("../../models/categorieModel")


const getCategories = async(req,res) =>{
    try{
        const data = await categorieModal.find()
        res.status(201).send(data)
    }catch{
        res.status(500).send({mess:"error to get categories"})
    }
}

module.exports = getCategories