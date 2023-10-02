import { fetchData } from "@/utils/functions/fetch-data";
import type { Post } from "@/types/types";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

async function getAll() {
  const response = await fetchData<Post[]>(BASE_URL);
  if (response.isLeft()) throw new Error(response.value.message);

  return response.value;
}

async function getById(id: string) {
  const response = await fetchData<Post>(`${BASE_URL}/${id}`);
  if (response.isLeft()) throw new Error(response.value.message);

  return response.value;
}

async function create(post: Post) {
  const response = await fetchData(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });

  if (response.isLeft()) throw new Error(response.value.message);

  return response.value;
}

async function update(post: Post) {
  const response = await fetchData(`${BASE_URL}/${post.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });

  if (response.isLeft()) throw new Error(response.value.message);

  return response.value;
}

async function remove(id: string) {
  const response = await fetchData(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (response.isLeft()) throw new Error(response.value.message);

  return response.value;
}

export const postsService = { getAll, getById, create, update, remove };
