import { NextResponse, NextRequest } from "next/server";
import { sign } from "jsonwebtoken";
import { User } from "@/types/types";

const SECRET_KEY = process.env.SECRET_KEY as string;

const users: User[] = [
  { id: 1, email: "marcelosouto676@gmail.com", password: "123456" },
];

export async function POST(request: NextRequest) {

  const { email, password } = await request.json();

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) return NextResponse.json({ message: "Usuário não encontrado." }, { status: 404 });

  const token = sign({ id: user.id }, SECRET_KEY, {
    expiresIn: "1d",
  });

  return NextResponse.json(
    { message: "Login efetuado com sucesso.", data: { token }, success: true },
    { status: 200 }
  );
}
