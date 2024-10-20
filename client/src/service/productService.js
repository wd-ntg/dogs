import { fetchApiPostRequest } from "../service/fetchApi";

const getProduct = async (id) => {
  return await fetchApiPostRequest(`/product/${id}`);
};
const getAllProducts = async (id) => {
  return await fetchApiPostRequest(`/product/all`);
};

const buyProduct = async (data) => {
  return await fetchApiPostRequest(`/product/buy`, data);
};

export default {
  getProduct,
  getAllProducts,
  buyProduct,
};
