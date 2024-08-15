import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { MulterMiddleware } from "../middlewares/multer.middleware";
import { ValidatorMidd } from "../middlewares/validator.middleware";
import { UserValidatorZod } from "../validators/user.validator";

const route = Router();

const userController = new UserController();
const validatorMidd = new ValidatorMidd();
const userValidatorZod = new UserValidatorZod();

route.post(
  "/register",
  MulterMiddleware.uploadSingle("foto"),
  validatorMidd.bodyValidator(userValidatorZod.register()),
  userController.register
);

route.post(
  "/login",
  validatorMidd.bodyValidator(userValidatorZod.login()),
  userController.login
);

export default route;
