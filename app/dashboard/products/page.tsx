import { deleteProduct } from "@/app/lib/actions";
import { fetchProducts } from "@/app/lib/fetchData";
import Button from "@/app/ui/Button";
import Pagination from "@/app/ui/dashboard/Pagination";
import Search from "@/app/ui/dashboard/Search";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Products({
  searchParams,
}: {
  searchParams: {
    q: string;
    page: string;
  };
}) {
  // 検索ワード
  const query = searchParams.q || "";
  // ページ数
  const page = searchParams.page || "1";
  const fetchedData = await fetchProducts(query, page);
  const product = fetchedData?.product;
  const count = fetchedData?.count;
  return (
    <div className="bg-gray-900 mt-5 p-5 rounded-md">
      <div className="flex items-center justify-between">
        <Search placeholder="商品を検索..." />
        <Link href="/dashboard/products/addProducts">
          <Button color="violet" size="medium">
            商品追加
          </Button>
        </Link>
      </div>
      <div className="text-left py-5">
        <table className="w-full [&_th]:p-2 [&_td]:p-2 [&_th]:min-w-24 [&_td]:max-w-32 [&_td]:truncate">
          <thead className="text-xs">
            <tr>
              <th>商品名</th>
              <th>商品詳細</th>
              <th>値段</th>
              <th>追加日</th>
              <th>在庫品数</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {product?.map((productData) => {
              return (
                <tr className="p-5" key={productData.id}>
                  <td className="flex items-center gap-3">
                    <Image
                      src={productData.img || "/noproduct.jpg"}
                      width={40}
                      height={40}
                      alt="user image"
                      className="rounded-full"
                    />
                    <span className="truncate">{productData.title}</span>
                  </td>
                  <td>{productData.desc}</td>
                  <td>{productData.price}</td>
                  {/* <td>{productData.createdAt.toString().splice(4, 16)}</td> */}
                  <td>2022.15.12</td>
                  <td>{productData.stock}</td>
                  <td>
                    <div className="flex gap-2">
                      <Link href={`/dashboard/products/${productData.id}`}>
                        <Button color="green">view</Button>
                      </Link>
                      <form action={deleteProduct}>
                        <input type="hidden" name="id" value={productData.id} />
                        <Button color="red">delete</Button>
                      </form>
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
