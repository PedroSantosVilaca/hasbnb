import "dotenv/config";
import express from "express";
import { connectDb } from "./config/db.js";
import UserRoutes from "./domains/users/routes.js";

const app = express();

app.use(express.json());

app.use("/users", UserRoutes);

const startServer = async () => {
  await connectDb();

  app.listen(4000, () => {
    console.log("Servidor está rodando na porta 4000");
  });
};

startServer();
