import { z } from "zod";
export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Pelo menos 2 caracteres" })
    .max(50),
  email: z.string().email({ message: "E-mail inválido" }),
  message: z
    .string()
    .min(1, {
      message: "Digite pelo menos 5 caracteres",
    })
    .max(200, { message: "Máximo de 200 caracteres" }),
});

export type ContactSchema = z.infer<typeof contactFormSchema>;
