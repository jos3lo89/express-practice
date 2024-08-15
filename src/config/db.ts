import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/express-crud");

    console.log("Db is connected");
  } catch (error: any) {
    console.log(error.message);
  }
}
