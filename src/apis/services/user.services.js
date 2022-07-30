import * as CONSTANT from "#utils/constants";
import * as responseUtils from "#utils/responseFormat";

export const getUser = async (props) => {
  const { conn, data } = props;
  const [rows] = await conn.query("SELECT * FROM city LIMIT 0, 10");
  console.log("test");
  return rows;
};
