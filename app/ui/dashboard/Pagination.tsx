import React from "react";
import Button from "../Button";
import Link from "next/link";

export default function Pagination() {
  return (
    <div className="flex items-center justify-between">
      <Link href="">
        <Button color="gray" isDisabled={true}>
          前へ
        </Button>
      </Link>
      <Link href="">
        <Button color="gray">次へ</Button>
      </Link>
    </div>
  );
}
