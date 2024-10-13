import { fetchApiPostRequest } from "../service/fetchApi";

const getProduct = async (id) => {
  return await fetchApiPostRequest(`/product/${id}`);
};
const getAllProducts = async (id) => {
  return await fetchApiPostRequest(`/product/all`);
};

export default { getProduct, getAllProducts };
