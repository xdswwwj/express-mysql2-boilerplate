// NOTE: node modules
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

// NOTE: File Import
import * as conf from "#configs/conf";
import * as CONSTANT from "#utils/constants";
import * as resFormat from "#utils/responseFormat";
import { APIS } from "#utils/apis";
import { specs, swaggerUi } from "#swagger/swagger";

import allRoutes from "#routes/index";

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

https: app.use(cors(conf.corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(APIS.INDEX.INDEX, allRoutes);

// 404
app.use((req, res, next) => {
  res.json(resFormat.responsesFormat({ type: CONSTANT.RES_TYPE.FRONT_ERR }));
});

app.listen(3000, () => {
  console.log("server start port 3000");
});
