import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { dbConnection } from "./db/dbConnection.js";
import bootstrap from "./src/bootstrab.js";

const app = express()
const port = 3000
dbConnection()
bootstrap(app)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))