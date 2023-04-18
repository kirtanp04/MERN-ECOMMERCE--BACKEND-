const categorieModal = require("../../models/categorieModel")


const addCategories = async(req,res)=>{
    const {categories} = req.body
    try{
        
            const data = new categorieModal({
                categorie:categories
            })
            data.save()
            res.send({mess:"Added"})
        

    }catch{
        res.status(500).send({mess:"error to add categories"})
    }
}

module.exports = addCategories