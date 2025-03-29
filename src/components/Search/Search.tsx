import { SearchIcon } from "../Icons";

interface SearchProps {
  label?: string;
  placeholder?: string;
  onSearch: (value: string) => void;
}

export const Search = ({ label, placeholder, onSearch }: SearchProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <form className="w-full">
      {label && (
        <label htmlFor="search" className="mb-2 block text-gray-900">
          {label}
        </label>
      )}
      <div className="relative">
        <div
          data-testid="search-icon"
          className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3"
        >
          <SearchIcon aria-label="Search icon" size="s" />
        </div>
        <input
          type="text"
          id="search"
          className="focus:ring-none block w-full rounded-md border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-gray-500 focus:outline-none"
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};
