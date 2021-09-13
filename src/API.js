import axios from "axios";

const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";
const sendRegistration = (body) => axios.post(`${URL}/auth/sign-up`, body);
const sendLogin = (body) => axios.post(`${URL}/auth/login`, body);
const getHabits = (config) => axios.get(`${URL}/habits`, config);
const sendNewHabit = (body, config) => axios.post(`${URL}/habits`, body, config);
const deleteHabit = (habitId, config) => axios.delete(`${URL}/habits/${habitId}`, config);
const getTodayHabits = (config) => axios.get(`${URL}/habits/today`, config);
const sendHabitDone = (habitId, config) => axios.post(`${URL}/habits/${habitId}/check`, {}, config);
const sendHabitUndone = (habitId, config) => axios.post(`${URL}/habits/${habitId}/uncheck`, {}, config);

export {
    sendRegistration,
    sendLogin,
    getHabits,
    sendNewHabit,
    deleteHabit,
    getTodayHabits,
    sendHabitDone,
    sendHabitUndone
}