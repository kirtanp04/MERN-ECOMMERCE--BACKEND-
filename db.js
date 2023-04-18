const mongoose = require("mongoose")


const ConnectDB = async()=>{
    try{
        await mongoose.connect(process.env.DB)
        .then(()=>{
            console.log("connected to Database")
        })

    }catch(e){
        console.log("Error to connect to Database")
    }
}

module.exports = ConnectDB