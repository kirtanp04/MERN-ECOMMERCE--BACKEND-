const productModal = require("../../models/productModal")

const addproduct = async(req,res)=>{
const{name,title,desc,price,categorie,brand,feature,rating,stock,color,image} = req.body

    try{
        const data = new productModal({
            name:name,
            title:title,
            description:desc,
            price:price,
            categorie:categorie,
            brand:brand,
            feature:feature,
            rating:rating,
            stock:stock,
            color:color,
            image:image,
        }) 
        data.save()
        res.status(201).send({mess:"success"})

    }catch{
        res.status(500).send({mess:"server error"})
    }
}

module.exports = addproduct