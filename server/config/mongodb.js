import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI).then(()=>{
        console.log("DB Connected")
    }).catch(()=>{
        console.log("Failed to connect to DB");
    })
}

export default connectDB;

