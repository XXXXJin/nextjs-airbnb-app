import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUser = async (query: string) => {
  const queryRegex = new RegExp(query, "i");
  try {
    connectToDB();
    const users = await User.find({ username: { $regex: queryRegex } });
    return users;
  } catch (error) {
    console.log(error);
  }
};
