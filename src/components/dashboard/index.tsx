import { fetchData } from "@/utils/functions/fetch-data";

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export default async function Dashboard() {
  const { data, error } = await fetchData<Post[]>(
    "https://jsonplaceholder.typicode.com/post"
  );

  if (error) return "Error"

  return (
    <main>
      {data?.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </main>
  );
}
