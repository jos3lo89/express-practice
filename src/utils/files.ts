import * as fs from "node:fs/promises";

export const deleteFile = async (ruta: string) => {
  return await fs.unlink(ruta);
};
