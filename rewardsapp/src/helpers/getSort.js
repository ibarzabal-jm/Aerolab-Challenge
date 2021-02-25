export const getSort = (products, sort) => {
  const productRef = [...products];
  switch (sort) {
    case "lowest":
      return productRef.sort((a, b) => a.cost - b.cost);

    case "highest":
      return productRef.sort((a, b) => b.cost - a.cost);

    default:
      return productRef.sort((a, b) =>
        a._id > b._id ? 1 : b._id > a._id ? -1 : 0
      );
  }
};
