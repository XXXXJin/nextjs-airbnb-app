"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams.toString());
      // 検索結果の最初のページに遷移させる
      params.set("page", "1");
      if (e.target.value) {
        params.set("q", e.target.value);
      } else {
        params.delete("q");
      }
      replace(`${pathName}?${params.toString()}`);
    },
    1000
  );

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
