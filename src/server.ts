import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { UserRoutes } from "./routes/user.routes";
import { connectDB } from "./config/db";

class Server {
  public app: express.Application;
  private static instance: Server;
  private userRoutes = new UserRoutes();

  private constructor() {
    this.app = express();
    this.config();
    this.dbInit();
    this.routesInit();
  }

  public static getInstance(): Server {
    if (!Server.instance) {
      Server.instance = new Server();
    }
    return Server.instance;
  }

  public config() {
    this.app.use(
      cors({
        credentials: true,
        origin: "*",
      })
    );

    this.app.use(cookieParser());
    this.app.use(express.json());
    this.app.use(express.text());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static("public"));
  }

  private dbInit() {
    connectDB();
  }

  public routesInit() {
    this.app.use("/api/v1/users", this.userRoutes.route);
  }

  public start() {
    this.app.listen(process.env.PORT, () => {
      console.log(`Server listening in port ${process.env.PORT}`);
    });
  }
}

const server = Server.getInstance();
server.start();
