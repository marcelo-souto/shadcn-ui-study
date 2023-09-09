import { User } from "@/types/types";
import { fetchData } from "@/utils/functions/fetch-data";

async function getCurrent(token: string) {
  
  const { data, error } = await fetchData<User>(
    "http://localhost:3000/user/me",
    { headers: { Authorization: `Bearer ${token}` } }
  );

  if (error) throw new Error(error);

  return data;
}

export const userService = { getCurrent };
