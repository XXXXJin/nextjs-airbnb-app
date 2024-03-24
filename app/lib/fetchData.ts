import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUser = async (query: string, page: string) => {
  const queryRegex = new RegExp(query, "i");
  const ITEM_PER_PAGE: number = 1;

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
