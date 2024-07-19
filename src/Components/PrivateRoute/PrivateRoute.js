import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
    return localStorage.getItem('REACTAPP.TOKEN') ? (
        element
    ) : (
        <Navigate to="/" replace />
    );
};

export default PrivateRoute