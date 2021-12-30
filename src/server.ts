import "reflect-metadata";
import express, { NextFunction, Response, Request } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import "./database";
import "./shared/container"

import { AppError } from "./errors/AppError";
import { routes } from "./routes/routes";
import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routes);

app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
    if(err instanceof AppError){
        return res.status(err.statusCode).json({
            message:err.message
        })
    }
    
    return res.status(500).json({
        status:"error",
        message:`Internal server error - ${err.message}`
    })
})

app.listen(3333, () => console.log("\n server is runnning"));
