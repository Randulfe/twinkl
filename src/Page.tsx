import { useEffect, useMemo, useRef, useState } from "react";
import type { Post as PostType } from "./entities/post";
import { Post } from "./components/Post/Post";
import { Search } from "./components/Search/Search";
import { useDeletePost, usePosts } from "./web/post";
import { useQueryClient } from "@tanstack/react-query";

const Page = () => {
  const [query, setQuery] = useState("");
  const [deletePostError, setDeletePostError] = useState<string | null>(null);
  // If the API supported partial matching, I would be passing the debounced
  // using useDebounce query to the usePosts hook
  const { data: posts, isLoading, isError } = usePosts();
  const { mutate: deletePost } = useDeletePost();
  const queryClient = useQueryClient();
  const timeOutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeOutRef.current) {
        clearTimeout(timeOutRef.current);
      }
    };
  }, []);

  const handleDeletePost = (id: number) => {
    if (!id) return;
    deletePost(
      { id },
      {
        onSuccess: () => {
          queryClient.setQueryData(
            ["posts", undefined],
            (prevPosts: PostType[]) => {
              return prevPosts.filter((post) => post.id !== id);
            },
          );
        },
        onError: () => {
          const post = posts?.find((post) => post.id === id);
          setDeletePostError(
            `Error deleting post${post ? ": " + post.title : ""}`,
          );
          timeOutRef.current = setTimeout(() => {
            setDeletePostError(null);
          }, 3000);
        },
      },
    );
  };

  const handleSearch = (value: string) => {
    setQuery(value);
  };

  const filteredPosts = useMemo(() => {
    return !posts ? [] : posts.filter((post) => post.title.includes(query));
  }, [posts, query]);

  return (
    <div className="min-h-full min-w-full py-10">
      <div className="mx-auto max-w-lg gap-4">
        <div className="w-full pr-6 pl-4">
          <Search onSearch={handleSearch} />
        </div>
        {isLoading && <p className="w-full pt-4 text-center">Loading...</p>}
        {isError && (
          <p className="w-full pt-4 text-center text-red-800">
            Error loading posts
          </p>
        )}
        {deletePostError && (
          <p className="w-full pt-4 text-center text-red-800">
            {deletePostError}
          </p>
        )}
        {filteredPosts && (
          <div className="flex w-full flex-col divide-y divide-gray-200">
            {filteredPosts.map((post) => (
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                onDelete={handleDeletePost}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
