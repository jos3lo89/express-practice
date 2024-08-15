import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { ValidatorMidd } from "../middlewares/validator.middleware";
import { userLoginZod, userRegisterZod } from "../validators/user.validator";
import { MulterMiddleware } from "../middlewares/multer.middleware";

export class UserRoutes {
  public route: Router;

  private controller: UserController = new UserController();
  private validator: ValidatorMidd = new ValidatorMidd();
  private multerMiddleware: MulterMiddleware = new MulterMiddleware();

  constructor() {
    this.route = Router();
    this.registerRoutes();
  }

  protected registerRoutes() {
    this.route.post(
      "/register",

      this.multerMiddleware.uploadSingle("foto"),
      this.validator.bodyValidator(userRegisterZod),
      this.controller.register
    );
    this.route.post(
      "/login",
      this.validator.bodyValidator(userLoginZod),
      this.controller.login
    );
  }
}
