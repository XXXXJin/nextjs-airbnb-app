"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";
import { MdSearch } from "react-icons/md";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const params = new URLSearchParams(searchParams.toString());
    params.set("q", e.target.value);
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-3 bg-gray-800 p-2 rounded-md">
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-none focus:outline-none"
        onChange={handleSearch}
      />
    </div>
  );
}
