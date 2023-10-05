import { userCredentials, TUserCredentials } from "@/types/types";

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

export async function loginAction(formData: FormData) {

  const email = formData.get("email");
  const password = formData.get("password");

  const result = userCredentials.safeParse({ email, password });

  if (!result.success) {
    const errors = result.error.formErrors.fieldErrors;
    let errorResponse = "";

    Object.entries(errors).forEach(([field, error]) => {
      errorResponse += `${field}: ${error.join(", ")}\n`;
    });

    return { message: errorResponse, success: false };
  }

  const user = users.find((user) => user.email === email);
  if (!user) return { message: "Usuário não encontrado", success: false };

  const isPasswordCorrect = user.password === password;
  if (!isPasswordCorrect) return { message: "Senha incorreta", success: false };

  return { message: "Login efetuado com sucesso", success: true };
}
