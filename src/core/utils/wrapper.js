import { pool } from "#configs/DB";

export const servicesWrapper = async (props) => {
  const { cb, data } = props;
  const conn = await pool.getConnection();
  await conn.beginTransaction();
  try {
    return await cb({ conn, data });
  } catch (error) {
    await conn.rollback();
    console.log(error);
  } finally {
    await conn.release();
  }
};
