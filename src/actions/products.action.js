export const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    console.log("Failed to fetch data");
    return {};
  }
  return res.json();
};

export const getProductById = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    console.log("Failed to fetch data");
    return {};
  }
  return res.json();
};
