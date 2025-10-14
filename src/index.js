// require('dotenv').config({path: './env'});
import dotenv from "dotenv";

dotenv.config();

import connectDB from "./db/index.js";

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on port : ${process.env.PORT || 8000}`);
    })
})
.catch((err)=>{
    console.log("Error in connecting to DB", err);
});
