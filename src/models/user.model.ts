import { userModelM } from "../schemas/user.schema";
import { encrypt } from "../utils/bcrypt";

export interface UserRegisterI {
  name: string;
  email: string;
  password: string;
  image: string;
}

export class UserModel {
  private userM = userModelM;

  async create(userData: UserRegisterI) {
    const userFound = await this.userM.findOne({ email: userData.email });

    if (userFound) throw new Error("Correo electronico ya esta tomada");

    const passwordHash = await encrypt(userData.password, 10);

    const createdUser = new this.userM({
      name: userData.name,
      email: userData.email,
      password: passwordHash,
      image: userData.image,
    });
    return (await createdUser.save()).toObject();
  }
}
