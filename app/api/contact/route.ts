import { NextResponse } from "next/server";
import { contactFormSchema } from "./schema";
import axios from "axios";

const WEBHOOK_URL = process.env.WEBHOOK_URL!;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, fullName, message } = contactFormSchema.parse(body);
    const messageData = {
      embeds: [
        {
          title: "Mensagem de Contato",
          color: 0x4983f5,
          fields: [
            {
              name: "Nome",
              value: fullName,
              inline: true,
            },
            {
              name: "E-mail",
              value: email,
              inline: true,
            },
            {
              name: "Mensagem",
              value: message,
            },
          ],
        },
      ],
    };
    await axios.post(WEBHOOK_URL, messageData);
    return NextResponse.json({ message: "Mensagem enviada com sucesso!" });
  } catch (error) {
    return NextResponse.error();
  }
}
