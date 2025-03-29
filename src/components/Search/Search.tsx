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
    <form className="max-w-md mx-auto">
      {label && (
        <label htmlFor="search" className="mb-2 text-gray-900 block">
          {label}
        </label>
      )}
      <div className="relative">
        <div
          data-testid="search-icon"
          className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
        >
          <SearchIcon aria-label="Search icon" size="s" />
        </div>
        <input
          type="text"
          id="search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-none focus:outline-none focus:border-gray-500"
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};
