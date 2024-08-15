import { Request, Response } from "express";
import { UserModel } from "../models/user.model";

export class UserController {
  private userModel = new UserModel();

  public register = async (req: Request, res: Response) => {
    try {
      if (!req.file) throw new Error("Falta foto perfil");

      console.log(req.file);

      const body = { ...req.body, image: `/uploads/${req.file.filename}` };

      const newUser = await this.userModel.create(body);

      if (!newUser) throw new Error("no se pudo crear el usuario");

      const { password: _, ...userWithOutPassword } = newUser;

      res.status(200).json(userWithOutPassword);
    } catch (error: any) {
      res.status(400).json({ message: [error.message] });
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      res.status(200).json({ message: ["login"] });
    } catch (error: any) {
      res.status(400).json({ message: [error.message] });
    }
  };
}
