import { z } from "zod";

export const userRegisterZod = z.object({
  name: z
    .string({
      required_error: "nombre es requerido",
      invalid_type_error: "el nombre debe ser una cadena de texto",
    })
    .min(6, { message: "El nombre debe tener 1 caracter como minimo" }),

  email: z
    .string({
      required_error: "Correo eletronico requerido",
      invalid_type_error: "el correo electronico deber ser una cadena de texto",
    })
    .email({
      message: "El correo no es válido",
    })
    .min(1, {
      message: "El correo debe tener al menos un caracter",
    }),

  password: z
    .string({
      required_error: "La clave es requerida",
      invalid_type_error: "La clave debe ser un string",
    })
    .min(6, {
      message: "La clave debe tener al menos 6 caracteres",
    }),
});

export const userLoginZod = z.object({
  email: z
    .string({
      required_error: "Correo eletronico requerido",
      invalid_type_error: "el correo electronico deber ser una cadena de texto",
    })
    .email({
      message: "El correo no es válido",
    })
    .min(1, {
      message: "El correo debe tener al menos un caracter",
    }),
  password: z
    .string({
      required_error: "La clave es requerida",
      invalid_type_error: "La clave debe ser un string",
    })
    .min(6, {
      message: "La clave debe tener al menos 6 caracteres",
    }),
});
