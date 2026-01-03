import connectDB from "./db/index.js";
import dotenv from "dotenv";

// config dotenv
dotenv.config({ path: "./env" });

//  connection data base
connectDB();
