import express from "express";

import userRoutes from "#routes/user.routes";
import { APIS } from "#utils/apis";

const router = express.Router();

router.use(APIS.USER.INDEX, userRoutes);

export default router;
