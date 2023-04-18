

const mongoose = require("mongoose")
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

const createSchema = new mongoose.Schema({
    fname:{
        type : String,
        require: true
    },
    lname:{
        type : String,
        require: true
    },
    email:{
        type : String,
        require: true
    },
    city:{
        type : String,
        require: true
    },
    password:{
        type : String,
        require: true
    },
    totalOrders:{
        type: Number,
        require: true,
        default:0
    },
    JoinAt:{
        type: String,
        require : true,
        default:`${day}-${month}-${year}`
    },
    role:{
        type : Boolean,
        default: false
    },
})

const UserModel = mongoose.model("usersdata",createSchema)

module.exports = UserModel  