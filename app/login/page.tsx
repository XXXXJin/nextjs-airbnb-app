import React from "react";
import FormInput from "@/app/ui/formInput";

export default function page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="p-10 bg-gray-900 flex flex-col gap-5 w-[500px] rounded-lg">
        <p className="text-center text-lg font-bold">ログイン</p>
        <FormInput placeholder="ログインID" inputType="text" />
        <FormInput placeholder="パスワード" inputType="password" />
        <button className="bg-green-700 hover:bg-green-500 rounded-lg p-2">
          ログイン
        </button>
      </form>
    </div>
  );
}
