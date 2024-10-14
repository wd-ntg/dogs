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

export default { userRegister, userLogin, userPostDog, getDogAdop, getAllAdop }