import { Request, Response } from "express";
import { userModel } from "../schemas/user.schema";

export class UserController {
  private userModel = userModel;

  // static async register(req: Request, res: Response) {
  async register(req: Request, res: Response) {
    try {
      // console.log("controller body -> ", req.body);
      // console.log("controller foto -> ", req.file);

      res.status(200).json({ message: ["register user"] });
    } catch (error: any) {
      res.status(400).json({ message: [error.message] });
    }
  }

  async login(req: Request, res: Response) {
    try {
      res.status(200).json({ message: ["login"] });
    } catch (error: any) {
      res.status(400).json({ message: [error.message] });
    }
  }
}
