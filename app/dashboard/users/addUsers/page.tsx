import { addUser } from "@/app/lib/actions";
import FormSelect from "@/app/ui/FormSelect";
import FormInput from "@/app/ui/formInput";
import React from "react";

export default function Add() {
  return (
    <div className="p-5 bg-gray-900 rounded-md mt-5">
      <form action={addUser} className="flex gap-5 flex-col">
        <div className="flex gap-5">
          <div className="flex-1">
            <FormInput
              inputType="text"
              forValue="userName"
              title="ユーザー名"
              placeholder="ユーザー名を入力してください。"
              isRequired={true}
              name="username"
            />
          </div>
          <div className="flex-1">
            <FormInput
              inputType="email"
              forValue="email"
              title="メールアドレス"
              placeholder="メールアドレスを入力してください。"
              isRequired={true}
              name="email"
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex-1">
            <FormInput
              inputType="password"
              forValue="password"
              title="パスワード"
              placeholder="パスワードを入力してください。"
              isRequired={true}
              name="password"
            />
          </div>
          <div className="flex-1">
            <FormInput
              inputType="phone"
              forValue="phone"
              title="電話番号"
              placeholder="電話番号を入力してください。"
              name="phone"
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex-1">
            <FormSelect title="権限種別">
              <option value="no">管理者なのか？</option>
              <option value="yes">はい</option>
              <option value="no">いいえ</option>
            </FormSelect>
          </div>
          <div className="flex-1">
            <FormSelect title="ステータス">
              <option value="yes">アクティブなのか？</option>
              <option value="yes">はい</option>
              <option value="no">いいえ</option>
            </FormSelect>
          </div>
        </div>

        <FormInput
          inputType="test"
          forValue="address"
          title="住所"
          placeholder="住所を入力してください。"
          name="address"
        />
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
