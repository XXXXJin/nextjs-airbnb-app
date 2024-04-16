import { ITEM_PER_PAGE } from "../const";
import { User, Product } from "./models";
import { connectToDB } from "./utils";

// ユーザー情報を取得する
export const fetchUser = async (query: string, page: string) => {
  const queryRegex = new RegExp(query, "i");

  try {
    connectToDB();
    const users = await User.find({ username: { $regex: queryRegex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (parseInt(page) - 1));
    const count = await User.countDocuments();
    return { users, count };
  } catch (error) {
    console.log(error);
  }
};

//　商品情報を取得する
export const fetchProduct = async (query: string, page: string) => {
  const queryRegex = new RegExp(query, "i");

  try {
    connectToDB();
    const product = await Product.find({ title: { $regex: queryRegex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (parseInt(page) - 1));
    const count = await Product.countDocuments();
    return { product, count };
  } catch (error) {
    console.log(error);
  }
};
