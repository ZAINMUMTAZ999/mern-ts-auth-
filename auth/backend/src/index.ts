import express, { Request, Response } from "express";
import "dotenv/config";
import cors from "cors";    
import { DBConnection } from "./db/index.db";
import { router } from "./routes/user.routers";
// import { router } from "./routes/user.routers";
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
 DBConnection().then(() => console.log("DataBase Connected Successfully")).catch((error) => console.log("error while connecting db", error))
app.use("/api/mern",router)
app.listen(port, () => {
    console.log(`App is listening at ${port}`)

})