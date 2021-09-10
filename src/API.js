import axios from "axios";

const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";
const sendRegistration = (body) => axios.post(`${URL}/auth/sign-up`, body);
const sendLogin = (body) => axios.post(`${URL}/auth/login`, body);

export {
    sendRegistration,
    sendLogin

}