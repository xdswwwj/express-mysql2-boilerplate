import * as CONSTANT from "#utils/constants";
import * as responseUtils from "#utils/responseFormat";

export const getUser = async (req, res) => {
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
  } catch (error) {
    console.log(error);
  }
};
