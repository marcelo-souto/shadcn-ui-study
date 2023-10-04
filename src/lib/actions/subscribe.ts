"use server";

import { subscriptionSchema } from "@/types/types";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@email.com",
    password: "123456",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "janedoe@email.com",
    password: "123456",
  },
  {
    id: 3,
    name: "Mary Doe",
    email: "marydoe@email.com",
    password: "123456",
  },
  {
    id: 4,
    name: "Marcelo Souto",
    email: "marcelosouto676@gmail.com",
    password: "123456",
  },
];

export async function subscribeAction(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  const result = subscriptionSchema.safeParse({ name, email, password });
  if (!result.success)
    return { message: "Erro ao cadastrar usuário", success: false };

  const user = users.find((user) => user.email === email);
  if (user) return { message: "Email já cadastrado", success: false };

  return {
    message: "Você foi cadastrado com sucesso!",
    success: true,
  };
}
