import express from "express";
import cors from "cors";
import * as conf from "#configs/conf";
const app = express();

app.use(cors(conf.corsOptions));

app.listen(3000, () => {
  console.log("server start port 3000");
});
