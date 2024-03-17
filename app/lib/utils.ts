import mongoose from "mongoose";

export const connectToDB = async () => {
  const connection: { isConnected: boolean } = { isConnected: false };
  try {
    if (connection.isConnected) return;
    const db: any = await mongoose.connect(process.env.MONGO || "");
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    throw error;
  }
};
