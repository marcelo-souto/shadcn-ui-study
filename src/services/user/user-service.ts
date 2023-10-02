import { User } from "@/types/types";
import { fetchData } from "@/utils/functions/fetch-data";

async function getCurrent(token: string) {
  
  const response = await fetchData<User>(
    "http://localhost:3000/user/me",
    { headers: { Authorization: `Bearer ${token}` } }
  );

  if (response.isLeft()) throw new Error(response.value.message);

  return response.value;
}

export const userService = { getCurrent };
