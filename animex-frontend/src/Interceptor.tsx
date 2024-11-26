import axios from "axios";


const baseUrl = 'http://localhost:3001';
export const axiosInstance = (baseURL: any = baseUrl) => {
    const token = localStorage.getItem('token');
    const instance = axios.create({
        baseURL: baseURL,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${token}`
        }
    });

    instance.interceptors.response.use((response) => {
        return response;
    }, function (error) {
        if (error?.response?.status === 401) {
            window.location.href = '/auth-login';
            localStorage.removeItem("token");
        }

        return Promise.reject(error?.response);
    })
    return instance;
}