import Button from "@/app/ui/Button";
import Pagination from "@/app/ui/dashboard/Pagination";
import Search from "@/app/ui/dashboard/Search";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const userDataArr = [
  {
    image: "/noavatar.png",
    name: "jin",
    email: "haixujin@hotmail.com",
    created: "2023/10/30",
    role: "client",
    action: "passive",
  },
  {
    image: "/noavatar.png",
    name: "jin",
    email: "haixujin@hotmail.com",
    created: "2023/10/30",
    role: "client",
    action: "passive",
  },
];

export default function Users() {
  return (
    <div className="bg-gray-900 mt-5 p-5 rounded-md">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <Button color="violet" size="medium">
            Add user
          </Button>
        </Link>
      </div>
      <div className="text-left p-5">
        <table className="w-full [&_th]:p-2 [&_td]:p-2">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Created at</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
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
                  <td>{useData.email}</td>
                  <td>{useData.created}</td>
                  <td>{useData.role}</td>
                  <td>{useData.action}</td>
                  <td>
                    <div className="flex gap-2">
                      <Link href="">
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
      <Pagination />
    </div>
  );
}
