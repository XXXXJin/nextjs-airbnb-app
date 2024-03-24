import { fetchUser } from "@/app/lib/fetchData";
import Button from "@/app/ui/Button";
import Pagination from "@/app/ui/dashboard/Pagination";
import Search from "@/app/ui/dashboard/Search";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Users({
  searchParams,
}: {
  searchParams: { q: string; page: string };
}) {
  // 検索ワード
  const query = searchParams.q || "";
  // ページ数
  const page = searchParams.page || "1";
  const fetchedData = await fetchUser(query, page);
  const users = fetchedData?.users;
  const count = fetchedData?.count;

  return (
    <div className="bg-gray-900 mt-5 p-5 rounded-md">
      <div className="flex items-center justify-between">
        <Search placeholder="ユーザーを検索..." />
        <Link href="/dashboard/users/addUsers">
          <Button color="violet" size="medium">
            ユーザー追加
          </Button>
        </Link>
      </div>
      <div className="text-left py-5">
        <table className="w-full [&_th]:p-2 [&_td]:p-2 [&_th]:min-w-24 [&_td]:max-w-32 [&_td]:truncate">
          <thead className="text-xs">
            <tr>
              <th>名前</th>
              <th>メールアドレス</th>
              <th>登録日</th>
              <th>ユーザー種別</th>
              <th>ステータス</th>
              <th>アクション</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {users?.map((user) => {
              return (
                <tr className="p-5" key={user.id}>
                  <td className="flex items-center gap-3">
                    <Image
                      src={user.img || "/noavatar.png"}
                      width={40}
                      height={40}
                      alt="user image"
                      className="rounded-full h-[40px]"
                    />
                    <span className="truncate"> {user.username}</span>
                  </td>
                  <td>{user.email}</td>
                  <td>123</td>
                  <td>{user.isAdmin ? "管理者" : "一般ユーザー"}</td>
                  <td>{user.isActive ? "利用中" : "退会"}</td>
                  <td>
                    <div className="flex gap-2">
                      <Link href={`/dashboard/users/${user.id}`}>
                        <Button color="green">view</Button>
                      </Link>
                      <Link href="">
                        <Button color="red">delete</Button>
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {count && <Pagination count={count} />}
    </div>
  );
}
