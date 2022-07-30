import * as CONSTANT from "#utils/constants";
import * as responseUtils from "#utils/responseFormat";
import * as wrapper from "#utils/wrapper";
import * as services from "#services/index";

export const getUser = async (req, res) => {
  try {
    const result = await wrapper.servicesWrapper({
      cb: services.user.getUser,
    });

    res.json(
      responseUtils.responsesFormat({
        type: CONSTANT.RES_TYPE.SUCCESS.EXISTS_DATA,
        msg: "Test",
        data: {
          result,
        },
      })
    );
  } catch (error) {
    console.log(error);
  }
};
