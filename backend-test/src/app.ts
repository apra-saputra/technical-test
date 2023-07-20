import * as dotenv from "dotenv";

if (process.env.NODE !== "production") {
  dotenv.config();
}

import express from "express";
import cors from "cors";
import cookies from "cookie-parser";
import router from "./routes/index.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app: express.Application = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookies());

app.get("/", (_, res) => {
  res.send({ message: "service ok 👌" });
});

app.use("/api", router);

app.use(errorHandler);

const port: number | string = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`listening on port : ${port}`);
});
