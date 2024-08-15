import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.routes";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// routes

app.use("/api/v1/users/", userRoute);

export default app;
