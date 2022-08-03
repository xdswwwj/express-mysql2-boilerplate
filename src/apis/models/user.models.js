import * as sql from "#sql/index";

export const getUser = async (props) => {
  try {
    const { conn, data } = props;

    const query = await sql.user.getUser({ limit: data.limit });
    const [rows] = await conn.query(query);
    return rows;
  } catch (error) {
    console.log(error);
  }
};
