import axios from 'axios';
const api = axios.create({
    baseURL: '/api'
})
export const signup = (payload) => api.post('/signup',payload);
export const signin = (payload) => api.post('/login',payload);

const apis ={
    signup,
    signin,
}
export default apis;