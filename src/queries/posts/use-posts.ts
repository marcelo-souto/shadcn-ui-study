import { useMutation, useQuery } from "@tanstack/react-query";
import { postsService } from "@/services/posts/posts-service";
import type { Post } from "@/types/types";

export function usePosts() {
  const query = useQuery({ queryKey: ["posts"], queryFn: postsService.getAll });

  return { posts: query.data, ...query };
}

export function usePost(id: string) {
  const query = useQuery({
    queryKey: ["post", id],
    queryFn: () => postsService.getById(id),
  });

  return { post: query.data, ...query };
}

export function useCreatePost() {
  const mutation = useMutation({
    mutationFn: (post: Post) => postsService.create(post),
  });

  return { create: mutation.mutate, ...mutation };
}

export function useUpdatePost() {
  const mutation = useMutation({
    mutationFn: (post: Post) => postsService.update(post),
  });

  return { update: mutation.mutate, ...mutation };
}

export function useRemovePost() {
  const mutation = useMutation({
    mutationFn: (id: string) => postsService.remove(id),
  });

  return { remove: mutation.mutate, ...mutation };
}
