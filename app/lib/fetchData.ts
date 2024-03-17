import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUser = async () => {
  try {
    connectToDB();
    const users = User.find();
    return users;
  } catch (error) {
    console.log(error);
  }
};
