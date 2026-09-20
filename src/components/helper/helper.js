const Title = (title) => {
  return title.split(" ").slice(0, 3).join(" ");
};

const SearchedProducts = (products, search) => {
  // console.log({ products, search });
  if (!search) return products;
  const searchProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search),
  );
  return searchProducts;
};

const filteredProducts = (products, category) => {
  if (!category) return products;
  const filterProducts = products.filter((p) => p.category === category);
  return filterProducts;
};

const createQuery = (currentQuery, newquery) => {
  if (newquery.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  if (newquery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  return { ...currentQuery, ...newquery };
};

const initialDatas = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) query.category = category;
  if (search) query.search = search;
  return query;
};

const sumiation = (product) => {
  const counter = product.reduce((count, curr) => count + curr.quantity, 0);
  const total_price = product
    .reduce((total, curr) => total + curr.price * curr.quantity, 0)
    .toFixed(2);
  return { counter, total_price };
};
const quantityHandler = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) return 0;
  else return state.selectedItems[index].quantity;
};

export {
  Title,
  SearchedProducts,
  filteredProducts,
  createQuery,
  initialDatas,
  sumiation,
  quantityHandler,
};
