import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGODB_URI || "mongodb://localhost:27017/myapp"
        );
        console.log("Connect to MongoDB");
    } catch (error) {
        console.log("Unable to connect to MongoDB", error);
        process.exit(0);
    }
};

export default connectDB;
