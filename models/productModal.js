

const mongoose = require("mongoose")

const newSchema = new mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    title:{
        type: String,
        require:true
    },
    description:{
        type: String,
        require:true
    },
    price:{
        type: String,
        require:true
    },
    categorie:{
        type: String,
        require:true
    },
    brand:{
        type: String,
        require:true
    },
    feature:{
        type: String,
        require:true
    },
    rating:{
        type: String,
        require:true
    },
    stock:{
        type: String,
        require:true
    },
    color:{
        type: String,
        require:true
    },
    image:{
        type: String,
        require:true
    },
})

const productModal = mongoose.model("product",newSchema)

module.exports = productModal