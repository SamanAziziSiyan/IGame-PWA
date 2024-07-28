import axios, { AxiosInstance } from 'axios';

const axiosInstancePayment: AxiosInstance = axios.create({
    baseURL: 'https://pg-stage.igame.ir',
    timeout: 10000,
    headers: {
        'Authorization': '83819e90-737b-409d-b8e0-e9d87587bc1b',
        'Content-Type': 'application/json',
    }
});

axiosInstancePayment.interceptors.request.use(
    config => {
        console.log('Request Interceptor:', config);
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axiosInstancePayment.interceptors.response.use(
    response => {
        console.log('Response Interceptor:', response);
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);


export default axiosInstancePayment;
