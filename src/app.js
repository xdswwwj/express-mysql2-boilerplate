import express from "express";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
};

app.use(cors(corsOptions));

app.listen(3000, () => {
  console.log("server start port 3000");
});
