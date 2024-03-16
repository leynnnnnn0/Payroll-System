import express from "express";
import { connectionDB } from "./database/connectionDB.js";
import cors from "cors"
import route from "./routes/employeesRoutes.js";

const app = express();

// Middlewares configuration
app.use(express.json());
app.use(cors());

// Databse configuration
connectionDB("mongodb+srv://Leynnnnnn:Plokinopki00@cluster3.qxgqowm.mongodb.net/payroll?retryWrites=true&w=majority&appName=Cluster3")

// Router
app.use("/payroll-system", route)

// Server configuration
app.listen(8000, () => {
    console.log("Connected to server")
})

