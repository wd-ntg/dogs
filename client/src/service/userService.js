import { fetchApiPostRequest } from "../service/fetchApi";

const userRegister = async (data) => {
    return await fetchApiPostRequest("/user/register", data);
}

const userLogin = async (data) => {
    return await fetchApiPostRequest("/user/login", data);
}


export default { userRegister, userLogin }