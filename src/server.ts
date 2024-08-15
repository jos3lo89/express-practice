import app from "./app";
import { connectDB } from "./config/db";

async function index() {
  app.listen(process.env.PORT, () => {
    console.log(`Server listen port: ${process.env.PORT}`);
  });

  await connectDB();
}

index();
