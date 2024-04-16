import { addProduct } from "@/app/lib/actions";
import FormSelect from "@/app/ui/FormSelect";
import FormInput from "@/app/ui/formInput";
import React from "react";

export default function Add() {
  return (
    <div className="p-5 bg-gray-900 rounded-md mt-5">
      <form action={addProduct} className="flex gap-5 flex-col">
        <div className="flex gap-5">
          <div className="flex-1">
            <FormInput
              inputType="text"
              forValue="title"
              title="商品名"
              placeholder="商品名を入力してください。"
              isRequired={true}
              name="title"
            />
          </div>
          <div className="flex-1">
            <FormSelect title="商品種別">
              <option selected value="general">
                カテゴリ選択してください。
              </option>
              <option value="kitchen">キッチン用品</option>
              <option value="phone">携帯</option>
              <option value="computer">パソコン</option>
            </FormSelect>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex-1">
            <FormInput
              inputType="text"
              forValue="price"
              title="値段"
              placeholder="値段を入力してください。"
              name="price"
            />
          </div>
          <div className="flex-1">
            <FormInput
              inputType="text"
              forValue="stock"
              title="在庫品数"
              placeholder="在庫品数を入力してください。"
              name="stock"
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex-1">
            <FormInput
              forValue="color"
              title="色"
              placeholder="色を入力してください。"
              name="color"
            />
          </div>
          <div className="flex-1">
            <FormInput
              forValue="size"
              title="サイズ"
              placeholder="サイズを入力してください。"
              name="size"
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
          name="desc"
        ></textarea>
        <div></div>
        <button
          type="submit"
          className="bg-green-700 hover:bg-green-500 rounded-md font-semibold py-2"
        >
          送信
        </button>
      </form>
    </div>
  );
}
