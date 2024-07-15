// axios.ts

import axios, { AxiosInstance } from 'axios';

const getToken = (): string | null => {
    const userData = localStorage.getItem('UserData');
    if (userData) {
        try {
            return JSON.parse(userData).token;
        } catch (error) {
            console.error('Error parsing user data from local storage', error);
            return null;
        }
    }
    return null;
};
let userData = getToken();
// let YOUR_ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMDkxNDI2MDE1NzEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9naXZlbm5hbWUiOiIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zdXJuYW1lIjoiIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiI3MyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6IiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6ImN1c3RvbWVyIiwiZXhwIjoxNzIwOTYyMDkwLCJpc3MiOiJJR2FtZS5pciIsImF1ZCI6IklHYW1lLmlyIn0.r1Ctd8LdmbDG67tdBldPBbWwtGevKqv6ViK6txdv_88"
const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://stage-apiepayment.igame.market/api/v1',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': userData ? `Bearer ${userData}` : '',
        'X-API-Key': '9Ge*BO-Bzh~z@^?fHP;Eu~0rM7:jD`JZ00b[cs!0<!o$aLp=Mu'
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
