
const mongoose = require("mongoose")

const newSchema = new mongoose.Schema({
    categorie:{
        type: String,
        require:true
    }
})

const categorieModal = mongoose.model("categories",newSchema)

module.exports = categorieModal