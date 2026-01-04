import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

// config dotenv
dotenv.config({ path: "./env" });

//  connection data base
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port : ${process.env.PORT}`);
    });
    app.on("error", (error) => {
      console.log("Error:", error);
      throw error;
    });
  })
  .catch((error) => {
    console.log("mongoDB connection field", error);
  });
