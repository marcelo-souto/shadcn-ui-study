"use server";

export async function subscribeAction(formData: FormData) {

  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    message: "Você foi cadastrado com sucesso!",
  };
}
