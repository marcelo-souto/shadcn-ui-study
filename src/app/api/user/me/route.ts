import { NextResponse, NextRequest } from "next/server";
import { User } from "@/types/types";
import verifyToken from "@/utils/functions/verify-token";

const SECRET_KEY = process.env.SECRET_KEY as string;

const users: User[] = [
  {
    id: 1,
    email: "marcelosouto676@gmail.com",
    password: "123456",
    name: "Marcelo Souto",
    role: "student",
  },
];

export async function GET(request: NextRequest) {
  const header = request.headers.get("Authorization");
  const token = header?.split(" ")[1];

  if (!token)
    return NextResponse.json(
      { message: "Token não encontrado.", success: false },
      { status: 400 }
    );

  const verifyTokenResult = verifyToken<{ id: number }>(token);
  if (!verifyTokenResult.isValid)
    return NextResponse.json(
      { message: "Token inválido.", success: false },
      { status: 401 }
    );

  const userId = verifyTokenResult.payload?.id;

  const user = users.find((user) => user.id === Number(userId));

  if (!user)
    return NextResponse.json(
      { message: "Usuário não encontrado.", success: false },
      { status: 404 }
    );

  return NextResponse.json(
    { message: "OK", data: { user }, success: true },
    { status: 200 }
  );
}
