"use server";

import { subscriptionSchema } from "@/types/types";
import { redirect } from "next/navigation";

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

  if (!result.success) {
    
    const errors = result.error.formErrors.fieldErrors;
    let errorResponse = "";

    Object.entries(errors).forEach(([field, error]) => {
      errorResponse += `${field}: ${error.join(", ")}\n`;
    });

    return { message: errorResponse, success: false };
  }

  const user = users.find((user) => user.email === email);
  if (user) return { message: "Email já cadastrado", success: false };

  redirect("/");
}
