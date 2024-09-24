import axios from "axios";
import { base_path } from './config';

// Create an Axios instance with the base URL and default headers
const api = axios.create({
    baseURL: base_path,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor to include the access token in every request
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            // Attach the access token to the Authorization header
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        // Check if the request is sending FormData and adjust headers
        if (config.data instanceof FormData) {
            config.headers['Content-Type'] = 'multipart/form-data';
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Function to refresh the access token using the refresh token
const refreshToken = async () => {
    try {
        const refresh_token = localStorage.getItem('refresh_token');
        if (refresh_token) {
            // Make a request to refresh the access token
            const response = await axios.post(`${base_path}accounts/custom/token/refresh/`, {
                refresh: refresh_token,
            });

            if (response.status === 200) {
                // Save the new access token to localStorage
                const { access } = response.data;
                localStorage.setItem('access_token', access);
                return access; // Return the new access token
            }
        } else {
            throw new Error('No refresh token available');
        }
    } catch (error) {
        console.error('Failed to refresh access token', error);
        // Remove tokens if refreshing fails and redirect to login
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.href = '/login'; // Redirect to login page
        return null;
    }
};

// Interceptor to handle 401 errors and refresh tokens
api.interceptors.response.use(
    (response) => {
        return response; // If the response is successful, just return it
    },
    async (error) => {
        const originalRequest = error.config;

        // Check if the error is 401 (Unauthorized) and the request has not been retried yet
        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true; // Mark the request as retried

            // Attempt to refresh the token
            const newAccessToken = await refreshToken();
            if (newAccessToken) {
                // Update the Authorization header with the new token
                originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                // Retry the original request with the new access token
                return api(originalRequest);
            }
        }

        // If unable to refresh or other errors, reject the promise with the error
        return Promise.reject(error);
    }
);

export default api;


