import axios, { AxiosInstance } from 'axios';

const axiosInstanceWordpress: AxiosInstance = axios.create({
    baseURL: 'https://igame.ir/api',
    timeout: 10000,
    headers: {
        'Authorization': '83819e90-737b-409d-b8e0-e9d87587bc1b',
        'Content-Type': 'application/json',
    }
});

axiosInstanceWordpress.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axiosInstanceWordpress.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);


export default axiosInstanceWordpress;
