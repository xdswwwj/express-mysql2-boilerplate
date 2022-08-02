import express from "express";

import { APIS } from "#utils/apis";
import * as controller from "#controllers/index";

const router = express.Router();

router.get(APIS.USER.TEST, controller.user.getUser);

export default router;
