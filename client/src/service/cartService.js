import { fetchApiPostRequest } from "../service/fetchApi";

const saveCart = async (data) => {
  return await fetchApiPostRequest(`/cart/save`, data);
};
const removeCart = async (data) => {
  return await fetchApiPostRequest(`/cart/remove`, data);
};

export default { saveCart, removeCart };
