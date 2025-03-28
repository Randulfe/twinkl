import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "./webFactory";
import { Post } from "@/entities/post";

const POST_PATH = "/posts";

const getPost = async (id: number): Promise<Post> => {
  const { data } = await api.get(`${POST_PATH}/${id}`);
  return data;
};

const getPosts = async (title?: string): Promise<Post[]> => {
  const { data } = await api.get(
    `${POST_PATH}${title ? `?title=${title}` : ""}`,
  );
  return data;
};

const createPost = async (post: Post): Promise<Post> => {
  const { data } = await api.post(`${POST_PATH}`, post);
  return data;
};

const updatePost = async (
  id: number,
  postData: Omit<Partial<Post>, "id">,
): Promise<Post> => {
  const { data } = await api.patch(`${POST_PATH}/${id}`, postData);
  return data;
};

const deletePost = async (id: number): Promise<void> => {
  await api.delete(`${POST_PATH}/${id}`);
};
export const usePost = (id: number) => {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => getPost(id),
  });
};

export const useCreatePost = (post: Post) => {
  return useMutation({
    mutationFn: () => createPost(post),
    mutationKey: ["createPost", post],
  });
};

export const useUpdatePost = (
  id: number,
  postData: Omit<Partial<Post>, "id">,
) => {
  return useMutation({
    mutationFn: () => updatePost(id, postData),
    mutationKey: ["createPost", id, postData],
  });
};

export const useDeletePost = () => {
  return useMutation({
    mutationFn: (params: { id: number }) => deletePost(params.id),
    mutationKey: ["deletePost"],
  });
};

export const usePosts = (title?: string) => {
  return useQuery({
    queryKey: ["posts", title],
    queryFn: () => getPosts(title),
  });
};
