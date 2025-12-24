"use client";

import { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export default function SearchBar({
  placeholder = "Search...",
  onSearch,
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.(value);
  };

  const handleClear = () => {
    setQuery("");
    onSearch?.("");
  };

  return (
    <div className="w-full max-w-md">
      <div className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full px-4 py-2 text-sm bg-transparent border-b border-zinc-300 focus:outline-none focus:border-zinc-900 transition"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-2 text-zinc-400 hover:text-zinc-600 transition"
            aria-label="Clear search"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
