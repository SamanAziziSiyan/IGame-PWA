import axios, { AxiosInstance } from 'axios';

const getToken = (): string | null => {
    if (typeof window !== 'undefined') {
        const userData = localStorage.getItem('UserData');
        if (userData) {
            try {
                return JSON.parse(userData).token;
            } catch (error) {
                console.error('Error parsing user data from local storage', error);
                return null;
            }
        }
    }
    return null;
};

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://stage-apiepayment.igame.market/api/v1',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'X-API-Key': '9Ge*BO-Bzh~z@^?fHP;Eu~0rM7:jD`JZ00b[cs!0<!o$aLp=Mu'
    }
});

// Add a request interceptor to set the Authorization header dynamically
axiosInstance.interceptors.request.use(
    config => {
        const token = getToken();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
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
