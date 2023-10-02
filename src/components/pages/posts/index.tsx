import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { postsService } from "@/services/posts/posts-service";
import Link from "next/link";

type PostsProps = {
  filter?: string | string[];
};

const Posts = async ({ filter }: PostsProps) => {

  const posts = await postsService.getAll();
  const users = Array.from(new Set(posts.map((post) => post.userId)));

  const filteredPosts = posts.filter((post) => {
    return filter === "all" ? posts : post.userId === Number(filter);
  });

  return (
    <Container as="main">
      
      <div className="flex justify-center gap-2 m-8">
        {users.map((user) => (
          <Button variant="outline" key={user} asChild>
            <Link href={`/posts?filter=${user}`}>{user}</Link>
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {filteredPosts?.map((post) => (
          <Card key={post.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg">{post.title}</CardTitle>
              <CardDescription>
                Postado por: Usuário {post.userId}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <p className="line-clamp-3">{post.body}</p>
            </CardContent>

            <CardFooter className="flex flex-1 justify-end items-end">
              <Button variant="outline">Ver mais</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Container>
  );
};

Posts.displayName = "Posts";

export { Posts };
