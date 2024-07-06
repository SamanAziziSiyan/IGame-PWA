// axios.ts

import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://stage-apiepayment.igame.market/api/v1/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
    }
});

axiosInstance.interceptors.request.use(
    config => {
        console.log('Request Interceptor:', config);
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    response => {
        console.log('Response Interceptor:', response);
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
