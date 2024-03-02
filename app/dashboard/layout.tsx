import React from "react";
import Navbar from "../ui/navbar/Navbar";
import SideBar from "../ui/sidebar/Sidebar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex fixed">
      <div className="flex-[1] bg-gray-900 fixed overflow-auto h-full ">
        <SideBar />
      </div>
      <div className="flex-[4]">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
