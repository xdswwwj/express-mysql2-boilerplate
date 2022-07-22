import * as CONSTANT from "#utils/constants";

/**
 * res.json으로 값 return 시켜줄 때의 포맷팅
 * @param {*} props
 * @returns
 */
export const responsesFormat = (props) => {
  let { type, msg, data } = props;

  msg = msg || "";

  // NOTE: return 할 데이터가 있을 시
  if (type === CONSTANT.RES_TYPE.SUCCESS.EXISTS_DATA) {
    return {
      status: CONSTANT.RES_STATUS.SUCCESS.OK,
      message: msg,
      data: data,
    };
  }

  // NOTE: return 할 데이터가 없을 시
  if (type === CONSTANT.RES_TYPE.SUCCESS.NO_DATA) {
    return {
      status: CONSTANT.RES_STATUS.SUCCESS.OK,
      message: msg,
      data: null,
    };
  }

  // NOTE: server error 시
  if (type === CONSTANT.RES_TYPE.SERVER_ERR) {
    return {
      status: CONSTANT.RES_STATUS.SERVER_ERR.INTERNAL_SERVER_ERR,
      message: "Server Error",
      data: null,
    };
  }

  // NOTE: front 404 error
  if (type === CONSTANT.RES_TYPE.FRONT_ERR) {
    return {
      status: CONSTANT.RES_STATUS.FRONT_ERR.NOT_FOUND,
      message: "Not Found",
      data: null,
    };
  }
};
