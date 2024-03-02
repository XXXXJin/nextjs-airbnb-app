import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

export default function Card() {
  return (
    <div className=" bg-gray-900 rounded-md flex gap-3 p-3">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-3">
        <p className="text-xs">ユーザーの合計</p>
        <p className="text-lg">2,200名</p>
        <p className="text-xs">
          先週より<span className="text-green-600">12%</span>増加
        </p>
      </div>
    </div>
  );
}
