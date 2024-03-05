import FormInput from "@/app/ui/formInput";
import React from "react";

export default function Add() {
  return (
    <div className="p-5">
      <form action="" className="flex flex-col gap-5">
        <FormInput
          inputType="text"
          forValue="title"
          title="商品名"
          placeholder="商品名を入力してください。"
          isRequired={true}
        />
        <div>
          <label htmlFor="cat" className="block mb-2 text-sm font-medium">
            商品種別
          </label>
          <select
            id="cat"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option selected value="general">
              カテゴリ選択してください。
            </option>
            <option value="kitchen">キッチン用品</option>
            <option value="phone">携帯</option>
            <option value="computer">パソコン</option>
          </select>
        </div>
        <FormInput
          inputType="number"
          forValue="price"
          title="値段"
          placeholder="値段を入力してください。"
        />
        <FormInput
          inputType="number"
          forValue="stock"
          title="在庫品数"
          placeholder="在庫品数を入力してください。"
        />
        <FormInput
          forValue="color"
          title="色"
          placeholder="色を入力してください。"
        />
        <FormInput
          forValue="size"
          title="サイズ"
          placeholder="サイズを入力してください。"
        />

        <label htmlFor="message" className="block text-sm font-medium">
          商品詳細
        </label>
        <textarea
          id="message"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="商品詳細を入力してください。"
        ></textarea>
      </form>
    </div>
  );
}
