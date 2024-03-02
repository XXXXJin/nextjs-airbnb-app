import Image from "next/image";
import React from "react";
import clsx from "clsx";

interface IUserData {
  image: string;
  name: string;
  status: string;
  data: string;
  amount: string;
}

const userDataArr: IUserData[] = [
  {
    image: "/noavatar.png",
    name: "Tony Stark",
    status: "保留中",
    data: "2024/01/02",
    amount: "2,000",
  },
  {
    image: "/noavatar.png",
    name: "Will Smith",
    status: "支払い完了",
    data: "2024/01/02",
    amount: "3,000",
  },
  {
    image: "/noavatar.png",
    name: "John Wick",
    status: "キャンセル",
    data: "2024/01/02",
    amount: "1,000",
  },
  {
    image: "/noavatar.png",
    name: "Bruce Lee",
    status: "支払い完了",
    data: "2024/01/02",
    amount: "10,000",
  },
];

export default function Transactions() {
  return (
    <div className="text-left bg-gray-900 my-5 p-5">
      <h2 className="mb-5 text-lg">直近の注文履歴</h2>
      <table className="w-full [&_th]:p-2 [&_td]:p-2">
        <thead>
          <tr>
            <th>ユーザー名</th>
            <th>支払いステータス</th>
            <th>支払日</th>
            <th>注文額</th>
          </tr>
        </thead>
        <tbody className="text-xs">
          {userDataArr.map((useData, index) => {
            return (
              <tr className="p-5" key={index}>
                <td className="flex items-center gap-3">
                  <Image
                    src={useData.image}
                    width={40}
                    height={40}
                    alt="user image"
                    className="rounded-full"
                  />
                  {useData.name}
                </td>
                <td>
                  <span
                    className={clsx("rounded-md px-1 py-1 font-semibold", {
                      "bg-yellow-600": useData.status === "保留中",
                      "bg-gray-600": useData.status === "支払い完了",
                      "bg-red-600": useData.status === "キャンセル",
                    })}
                  >
                    {useData.status}
                  </span>
                </td>
                <td>{useData.data}</td>
                <td>{useData.amount} 円</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
