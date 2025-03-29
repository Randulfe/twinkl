import { DeleteIcon } from "../Icons";

interface PostProps {
  title: string;
  body: string;
  onDelete: () => void;
}

export const Post = ({ title, body, onDelete }: PostProps) => {
  return (
    <div className="flex flex-row justify-between w-full gap-4">
      <div className="flex flex-col w-full">
        <p className="text-lg font-bold truncate text-nowrap">{title}</p>
        <p className="text-sm text-gray-500 line-clamp-2">{body}</p>
      </div>
      <div className="flex flex-row">
        <button
          className="cursor-pointer text-gray-500 p-2 rounded-md focus:outline-none focus:bg-gray-100"
          aria-label="Delete post"
          onClick={onDelete}
        >
          <DeleteIcon size="s" />
        </button>
      </div>
    </div>
  );
};
