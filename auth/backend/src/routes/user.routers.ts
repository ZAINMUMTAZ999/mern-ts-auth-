import express from "express";
import { createUser, getUser, updateUser } from "../controllers/user.controllers";
import { jwtCheck, jwtParse } from "../middlewares/auth.middlewares";
const router = express.Router();
router.get("/",jwtCheck,jwtParse,getUser)
router.post("/",jwtCheck,createUser)
router.put("/",jwtCheck,jwtParse,updateUser)
export {
    router
}