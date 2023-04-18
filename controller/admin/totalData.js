const categorieModal = require("../../models/categorieModel")
const productModal = require("../../models/productModal")
const UserModel = require("../../models/userModel")


const totalData = async(req,res)=>{
    try{
        const user = await UserModel.find().count()
        // console.log(user)
        const categoriesData = await categorieModal.find().count()
        const productData = await productModal.find().count()
        // console.log(categoriesData)
        const stockNo = await productModal.find({stock:"no"}).count()
        const stockYes = await productModal.find({stock:"yes"}).count()
        // console.log(stockYes)
        res.status(201).send({user,categoriesData,productData,stockNo,stockYes})

    }catch{
        res.status(500).send({mess:"error to get total data"})
    }
}

module.exports = totalData