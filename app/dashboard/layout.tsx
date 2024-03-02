import React from "react";
import Navbar from "../ui/dashboard/Navbar";
import SideBar from "../ui/dashboard/Sidebar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <div className="flex-[1] bg-gray-900 fixed overflow-auto h-full w-60">
        <SideBar />
      </div>
      <div className="flex-[4] ml-60 p-4">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
