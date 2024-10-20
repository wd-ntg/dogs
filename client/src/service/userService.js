import { fetchApiPostRequest } from "../service/fetchApi";

const userRegister = async (data) => {
    return await fetchApiPostRequest("/user/register", data);
}

const userLogin = async (data) => {
    return await fetchApiPostRequest("/user/login", data);
}

const userPostDog = async (data) => {
    return await fetchApiPostRequest("/user/post-dog", data);
}

const getDogAdop = async (id) => {
    return await fetchApiPostRequest(`/user/dog-adop/${id}`);
}

const getAllAdop = async () => {
    return await fetchApiPostRequest("/user/all-adop");
}   


const getSearchDog = async (label) => {
    return await fetchApiPostRequest(`/user/search-dog/${label}`);
}

const getProfile = async (data) => {
    return await fetchApiPostRequest("/user/profile", data);
}

const updateProfile = async (data) => {
    return await fetchApiPostRequest("/user/update-profile", data);
}

const getAllOrder = async (data) => {
    return await fetchApiPostRequest("/user/all-order", data);
}

export default { userRegister, userLogin, userPostDog, getDogAdop, getAllAdop, getSearchDog, getProfile, updateProfile, getAllOrder };