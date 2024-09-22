import axios from "axios";
import { base_path } from './config';


const api = axios.create({
    baseURL: base_path,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    if (config.data instanceof FormData) {
        config.headers['Content-Type'] = 'multipart/form-data';
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});


const refreshToken = async () => {
    try {
        const refresh_token = localStorage.getItem('refresh_token');
        if (refresh_token) {
            const response = await api.post(`${base_path}accounts/custom/token/refresh/`, {
                refresh: refresh_token,
            });
            if (response.status === 200) {
                const { access_token } = response.data;
                localStorage.setItem('access_token', access_token);
                return access_token;
            }
        } else {
            throw new Error('No refresh token available');
        }
    } catch (error) {
        console.error('Failed to refresh access token', error);
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.href = '/login'; 
        return null;
    }
};

api.interceptors.response.use(
    response => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const newAccessToken = await refreshToken();
            if (newAccessToken) {
                originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                return api(originalRequest); 
            }
        }
        return Promise.reject(error);
    }
);

export default api;
