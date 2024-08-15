import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect("mongodb://joselo:3322@localhost:27017/expresscrud?authSource=admin");

    console.log("Db is connected");
  } catch (error: any) {
    console.log(error.message);
  }
}
