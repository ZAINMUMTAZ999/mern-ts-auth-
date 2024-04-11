import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    auth0Id:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    name:{
        type:String
        
    },
    address:{
        type:String,
        
    },
    phoneNumber:{
        type:String,
        
    },
})
export  const User = mongoose.model("User",userSchema)