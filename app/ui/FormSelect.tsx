import React, { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function FormSelect({ title, children }: Props) {
  return (
    <div>
      <label htmlFor="select" className="block mb-2 text-sm font-medium ">
        {title}
      </label>
      <select
        id="select"
        className="outline-none border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 "
      >
        {children}
      </select>
    </div>
  );
}
