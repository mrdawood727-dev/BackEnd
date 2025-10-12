import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectInstance = await mongoose.connect(
      process.env.MONGO_URL
    );
    console.log("\n MongoDB connected:", connectInstance.connection.host);
  } catch (error) {
    console.log("MongoDB connection FAILED:", error);
    process.exit(1);
  }
};

export default connectDB;   