"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";
import Button from "../Button";

export default function Pagination({ count }: { count: number }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams.toString());
  const page = searchParams.get("page") || "1";
  const ITEM_PER_PAGE = 1;

  const hasPrevPage = parseInt(page) !== 1;
  const hasNextPage = parseInt(page) * ITEM_PER_PAGE < count;

  const handleClick = (type: string) => {
    const currentPageNumber = parseInt(page);
    const newPageNumber =
      type === "prev" ? currentPageNumber - 1 : currentPageNumber + 1;
    params.set("page", String(newPageNumber));
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-between">
      <div onClick={() => handleClick("prev")}>
        <Button color="gray" isDisabled={!hasPrevPage}>
          前へ
        </Button>
      </div>
      <div onClick={() => handleClick("next")}>
        <Button color="gray" isDisabled={!hasNextPage}>
          次へ
        </Button>
      </div>
    </div>
  );
}
