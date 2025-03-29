import { DeleteIcon } from "../Icons";

interface PostProps {
  title: string;
  body: string;
  id: number;
  onDelete: (id: number) => void;
}

export const Post = ({ title, body, id, onDelete }: PostProps) => {
  return (
    <div className="flex w-full flex-row justify-between gap-4 border-b border-gray-200 p-4">
      <div className="flex min-w-0 flex-1 flex-col">
        <p className="text-md truncate font-bold md:text-xl">{title}</p>
        <p className="line-clamp-2 text-sm text-gray-500 md:text-lg">{body}</p>
      </div>
      <div className="flex flex-shrink-0 flex-row">
        <button
          className="cursor-pointer rounded-md p-2 text-gray-500 focus:bg-gray-100 focus:outline-none"
          aria-label="Delete post"
          onClick={() => onDelete(id)}
        >
          <DeleteIcon size="s" />
        </button>
      </div>
    </div>
  );
};
