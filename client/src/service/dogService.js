import { fetchApiPostRequest } from "../service/fetchApi";

const getDog = async (id) => {
  return await fetchApiPostRequest(`/dog/${id}`);
};
const getAllDogs = async (id) => {
  return await fetchApiPostRequest(`/dog/all`);
};

export default { getDog, getAllDogs };
