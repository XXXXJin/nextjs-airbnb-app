import React from "react";
import { MdSearch } from "react-icons/md";

export default function Search({ placeholder }: { placeholder: string }) {
  return (
    <div className="flex items-center gap-3 bg-gray-800 p-2 rounded-md">
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-none focus:outline-none"
      />
    </div>
  );
}
