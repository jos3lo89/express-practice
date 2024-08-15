import bcrypt from "bcryptjs";

export const encrypt = async (password: string, salt: number) => {
  return await bcrypt.hash(password, salt);
};

export const compare = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};
