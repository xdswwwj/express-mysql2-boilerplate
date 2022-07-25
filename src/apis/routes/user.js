import express from "express";

import * as CONSTANT from "#utils/constants";
import * as responseUtils from "#utils/responseFormat";
import { APIS } from "#utils/apis";

const router = express.Router();

router.get(APIS.USER.TEST, async (req, res) => {
  try {
    res.json(
      responseUtils.responsesFormat({
        type: CONSTANT.RES_TYPE.SUCCESS.EXISTS_DATA,
        msg: "Test",
        data: {
          test: "Hello World!",
        },
      })
    );
  } catch (error) {}
});

export default router;
