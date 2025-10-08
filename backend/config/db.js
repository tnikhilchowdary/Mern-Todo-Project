import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(
        "mongodb+srv://todo:todo%401234@cluster0.hwdokn3.mongodb.net/MERN-TODO?retryWrites=true&w=majority&appName=Cluster0"
    )
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};
