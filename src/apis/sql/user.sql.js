export const getUser = (props) => {
  const { limit } = props;
  return `SELECT *
          FROM city 
          LIMIT 0, ${limit}`;
};
