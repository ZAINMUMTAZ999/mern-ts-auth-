import express, { Request, Response } from "express";
import { User } from "../models/user.models";
import { ApiError } from "../utils/ApiError";


const getUser = async (req: Request, resp: Response)=>{
    try {
          
        const user= await User.findOne({_id:req.userId})
        console.log("user get controoler ",user)
        if(!user){
            throw new ApiError(404,"User not found for gettig the details")
        };
        return resp.send(user)





    } catch (error) {
        console.log(error)
        throw new ApiError(500,"Error while getting user controller")
    }

}




const createUser = async (req: Request, resp: Response) => {
    try {
        const { auth0Id } = req.body;
        await User.findOne({ auth0Id });
        const user = new User(req.body)
        await user.save()
        return resp.status(200).json({ user })

    } catch (error) {
        console.log(error);
        throw new ApiError(500, "Error while creating the user")
    }

};


const updateUser = async (req: Request, resp: Response) => {
    try {

        const { name, address, phoneNumber ,email} = req.body;
        // const =req.userId
        const user = await User.findById(req.userId);
        if (!user) {
            throw new ApiError(409, "User not found for Updation details")
        };
     
        user.name = name;
        user.email = email;
        user.address = address;
        user.phoneNumber = phoneNumber;
        await user.save()
        resp.status(200).json({ user })




    } catch (error) {
        console.log(error)
        throw new ApiError(500, "Error while Updating the user!!")
    }
}


export {
    getUser,createUser, updateUser

}