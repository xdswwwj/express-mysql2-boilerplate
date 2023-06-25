// NOTE: node modules
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

dotenv.config();

// NOTE: File Import
import * as conf from "#configs/conf";
import { specs, swaggerUi } from "#swagger/swagger";
import { APIS } from "#utils/apis";
import * as CONSTANT from "#utils/constants";
import * as resFormat from "#utils/responseFormat";
import winston from "#utils/winston";

import allRoutes from "#routes/index";

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(cors(conf.corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan(conf.logger.env, { stream: winston.stream }));
app.use(cookieParser());

app.use(APIS.INDEX.INDEX, allRoutes);

// 404
app.use((req, res, next) => {
  res.json(resFormat.responsesFormat({ type: CONSTANT.RES_TYPE.FRONT_ERR }));
});

app.listen(3000, () => {
  console.log("server start port 3000");
});
