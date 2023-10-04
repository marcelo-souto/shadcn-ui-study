"use server";

export async function subscriptionAction(formData: FormData) {

  const name = formData.get("name");
  const email = formData.get("email");

  console.log({ name, email });
}
