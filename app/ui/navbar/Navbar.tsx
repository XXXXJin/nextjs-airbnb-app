"use client";

import { usePathname } from "next/navigation";
import React from "react";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
export default function Navbar() {
  const pathName = usePathname();

  return (
    <div className="flex justify-between items-center p-4 bg-gray-900 rounded-md">
      <p>{`${pathName.split("/").pop()} page`}</p>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3 bg-gray-800 p-2 rounded-md">
          <MdSearch />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none focus:outline-none"
          />
        </div>
        <div className="flex gap-5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
}
