import "dotenv/config";
import dns from "dns";
import mongoose from "mongoose";
const { MONGO_URL } = process.env;

dns.setServers(["8.8.8.8", "1.1.1.1"]);

export const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Deu certo");
  } catch (error) {
    console.log("Não deu certo", error);
  }
};
