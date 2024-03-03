import Button from "@/app/ui/Button";
import Pagination from "@/app/ui/dashboard/Pagination";
import Search from "@/app/ui/dashboard/Search";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const productDataArr = [
  {
    image: "/noproduct.jpg",
    title: "iphone",
    description: "this is the newest virsion of iphone 15",
    price: "2,000",
    created: "2023/10/30",
    stock: "20",
  },
  {
    image: "/noproduct.jpg",
    title: "table",
    description: "created by the most famous artist",
    price: "5,000",
    created: "2023/10/30",
    stock: "40",
  },
];

export default function Products() {
  return (
    <div className="bg-gray-900 mt-5 p-5 rounded-md">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <Button color="violet" size="medium">
            Add product
          </Button>
        </Link>
      </div>
      <div className="text-left p-5">
        <table className="w-full [&_th]:p-2 [&_td]:p-2">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Created at</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {productDataArr.map((productData, index) => {
              return (
                <tr className="p-5" key={index}>
                  <td className="flex items-center gap-3">
                    <Image
                      src={productData.image}
                      width={40}
                      height={40}
                      alt="user image"
                      className="rounded-full"
                    />
                    {productData.title}
                  </td>
                  <td>{productData.description}</td>
                  <td>{productData.price}</td>
                  <td>{productData.created}</td>
                  <td>{productData.stock}</td>
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
