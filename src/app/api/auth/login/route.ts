import { NextResponse, NextRequest } from "next/server";
import { sign } from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY as string;

type User = {
  id: number;
  email: string;
  password: string;
};

const users: User[] = [
  { id: 1, email: "marcelosouto676@gmail.com", password: "123456" },
];

export async function POST(request: NextRequest) {
  
  const { email, password } = await request.json();

  const user = users.find((user) => user.email === email && user.password === password);
  if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });

  const token = sign({ email }, SECRET_KEY, {
    subject: user.email,
    expiresIn: "1d",
  });

  return NextResponse.json(
    { message: "Logged successfully", data: { token }, success: true },
    { status: 200 }
  );
}
