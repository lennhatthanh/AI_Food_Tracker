import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
    try {
        const res = await mongoose.connect(process.env.MONGO_URL);
        console.log("Connect Mongoose Successfull");
    } catch (error) {
        console.log("Connect Mongoose Error", error);
        process.exit(1);
    }
};

export default connectDB;