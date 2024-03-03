import React from "react";
import Button from "../Button";
import Link from "next/link";

export default function Pagination() {
  return (
    <div className="flex items-center justify-between">
      <Link href="">
        <Button color="gray" isDisabled={true}>
          previous
        </Button>
      </Link>
      <Link href="">
        <Button color="gray">next</Button>
      </Link>
    </div>
  );
}
