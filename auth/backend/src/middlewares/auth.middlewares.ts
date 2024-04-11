import {auth} from "express-oauth2-jwt-bearer"
import express,{NextFunction, Request,Response} from "express"
import jwt from "jsonwebtoken"
import { ApiError } from "../utils/ApiError";
import { User } from "../models/user.models";
declare global {
    namespace Express {
        interface Request {
            auth0Id:string,
            userId:string
        }
    }
}
export const jwtCheck = auth({
    audience: 'mern-eid',
    issuerBaseURL: 'https://dev-qgkz6rjnonmmj53l.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });
  export const jwtParse = async(req:Request,resp:Response,next:NextFunction)=>{
const {authorization}=req.headers;
if(!authorization || !authorization.startsWith("Bearer ")){
    throw new ApiError(404,"User Access token not found")
};
const token =authorization.split(" ")[1]
console.log("token",token)

try {
    
const decodeToken=  jwt.decode(token) as jwt.JwtPayload;
///console.log(decodeToken)
const auth0Id= decodeToken.sub ;
 

const user=await User.findOne({auth0Id})
if(!user){
    throw new ApiError(400,"user not found after decode")
};
req.auth0Id=user.auth0Id;
req.userId = user._id.toString()  ;
next()
} catch (error) {
    console.log(error);
    throw new ApiError(500,"Something Went wrong while Access the token from headers!")
}

  }