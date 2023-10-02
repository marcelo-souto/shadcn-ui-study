import { Posts } from "@/components/pages/posts";

export default function PostsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const filter = searchParams.filter || "all";

  return <Posts filter={filter} />;
}
