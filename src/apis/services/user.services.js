import * as CONSTANT from "#utils/constants";
import * as responseUtils from "#utils/responseFormat";
import * as models from "#models/index";

export const getUser = async (props) => {
  try {
    const { conn, data } = props;
    const result = await models.user.getUser({ conn, data });

    return result;
  } catch (error) {
    console.log(error);
  }
};
