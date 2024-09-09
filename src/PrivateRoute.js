import React from 'react';
import { Route, Navigate } from 'react-router-dom';


const isAuthenticated = () => {
    const token = localStorage.getItem('access_token');
    return !!token;
};

const PrivateRoute = ({ element, ...rest }) => {
    return isAuthenticated() ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
