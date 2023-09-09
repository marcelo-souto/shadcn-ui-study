import { User, UserCredentials } from "@/types/types";
import { fetchData } from "@/utils/functions/fetch-data";

async function login({ email, password }: UserCredentials) {

  const response = await fetchData<User>(
    "http://localhost:3000/api/auth/login",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }
  );

  if (!response.success) throw new Error(response.message);

  return response;
}

export const authService = { login };
