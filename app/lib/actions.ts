"use server";
import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

// 新規ユーザーを追加する
export const addUser = async (formData: FormData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  try {
    connectToDB();
    const salt = await bcrypt.genSalt(10);
    const hashdedPassword = bcrypt.hash(password as string, salt);
    const newUser = new User({
      username,
      email,
      password: hashdedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("failed to add user");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

// 新しい商品を追加する
export const addProduct = async (formData: FormData) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);
  try {
    connectToDB();
    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });

    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("failed to add products");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

// ユーザー削除
export const deleteUser = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("failed to delete user");
  }

  revalidatePath("/dashboard/users");
};

// 商品削除
export const deleteProduct = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);
  console.log(id);
  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("failed to delete product");
  }

  revalidatePath("/dashboard/products");
};
