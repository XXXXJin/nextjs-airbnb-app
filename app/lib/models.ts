import mongoose, {
  Schema,
  Document,
  model,
  connect,
  models,
  Model,
} from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  phone: number;
  address: string;
  img: string;
  isAdmin: boolean;
  isActive: boolean;
  createdAt: Date;
  updateAt: Date;
}

export interface IProduct extends Document {
  title: string;
  desc: string;
  price: number;
  stock: number;
  img: string;
  color: string;
  size: string;
  createdAt: Date;
  updateAt: Date;
}

const userSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
    },
    address: {
      type: String,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const productSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  { timestamps: true }
);

interface UserModel extends Model<IUser> {}
interface ProductModel extends Model<IProduct> {}

export const User = models.User
  ? (models.User as UserModel)
  : model<IUser>("User", userSchema);
export const Product = models.Product
  ? (models.Product as ProductModel)
  : model<IProduct>("Product", productSchema);
