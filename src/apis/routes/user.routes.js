import express from "express";

import { APIS } from "#utils/apis";
import * as controller from "#controllers/index";

const router = express.Router();
/**
 * @swagger
 * paths:
 *  /user/test:
 *    get:
 *      tags: [USER]
 *      summary: 유저 정보 테스트
 *      responses:
 *        200:
 *          description: 유저 정보를 가져왔습니다.
 */
router.get(APIS.USER.TEST, controller.user.getUser);

export default router;
