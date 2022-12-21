import axios from 'axios';
// import 'dotenv/config';

const api = axios.create({
    baseURL: "https://ancient-ridge-01571.herokuapp.com"
});

export default api;