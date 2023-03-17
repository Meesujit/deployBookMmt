const mongoose = require("mongoose");
const db = "mongodb+srv://empMgmt:fYLFCe2kSXO1W3bp@cluster0.jmj5m1f.mongodb.net/?retryWrites=true&w=majority"; 

const connectDB = async() =>{
    try{
        mongoose.set("strictQuery", true)
        await mongoose.connect(db,{
            useNewUrlParser: true,
            
        })
    }
    catch (err){
        console.error(err.message)
        process.exit(1);
    }
}

module.exports = connectDB;

