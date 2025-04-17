import React from "react";

const SearchWithBtn = () => {
  return (
    <div className="relative w-[200px] sm:w-[600px]">
      <input
        type="search"
        id="default-search"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-ghred-500 focus:ring-ghred-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-ghred-500 dark:focus:ring-ghred-500"
        placeholder="Search"
        required
      />
      <button
        type="submit"
        className="absolute end-0 top-0 h-full rounded-e-lg border border-ghred-500 bg-ghred-500 p-2.5 text-sm font-medium text-white hover:bg-ghred-600 focus:outline-none focus:ring-4 focus:ring-ghred-500 dark:bg-ghred-500 dark:hover:bg-ghred-500 dark:focus:ring-ghred-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchWithBtn;
