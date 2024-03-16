import React from "react";
import Image from "next/image";
import FormInput from "@/app/ui/formInput";

export default function viewProduct({ params }: { params: { id: string } }) {
  const productId = params.id;
  return (
    <div className="p-5 bg-gray-900 rounded-md mt-5">
      <form action="" className="flex gap-5 flex-col">
        <div className="flex gap-5">
          <div className="flex-1">
            <FormInput
              inputType="text"
              forValue="title"
              title="商品名"
              placeholder="商品名を入力してください。"
              isRequired={true}
            />
          </div>
          <div className="flex-1">
            <label htmlFor="cat" className="block mb-2 text-sm font-medium ">
              商品種別
            </label>
            <select
              id="cat"
              className="outline-none border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 "
            >
              <option selected value="general">
                カテゴリ選択してください。
              </option>
              <option value="kitchen">キッチン用品</option>
              <option value="phone">携帯</option>
              <option value="computer">パソコン</option>
            </select>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex-1">
            <FormInput
              inputType="text"
              forValue="price"
              title="値段"
              placeholder="値段を入力してください。"
            />
          </div>
          <div className="flex-1">
            <FormInput
              inputType="text"
              forValue="stock"
              title="在庫品数"
              placeholder="在庫品数を入力してください。"
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex-1">
            <FormInput
              forValue="color"
              title="色"
              placeholder="色を入力してください。"
            />
          </div>
          <div className="flex-1">
            <FormInput
              forValue="size"
              title="サイズ"
              placeholder="サイズを入力してください。"
            />
          </div>
        </div>

        <label htmlFor="message" className="block text-sm font-medium">
          商品詳細
        </label>
        <textarea
          id="message"
          rows={4}
          className="outline-none border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 "
          placeholder="商品詳細を入力してください。"
        ></textarea>
        <div></div>
        <button
          type="submit"
          className="bg-green-700 hover:bg-green-500 rounded-md font-semibold py-2"
        >
          更新
        </button>
      </form>
    </div>
  );
}
