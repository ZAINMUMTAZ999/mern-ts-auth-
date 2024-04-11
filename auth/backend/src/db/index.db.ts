import mongoose from "mongoose";
// import { Request, Response } from "express";
import { ApiError } from "../utils/ApiError";
export const DBConnection = async () => {

    try {
        await mongoose.connect(process.env.DATABASEURL as string);
        console.log("Database Ready to connect!!")
        // console.log(database)
    } catch (error) {
        console.log(error);
        throw new ApiError(500, "Database Failed to connect😢")
    }
}