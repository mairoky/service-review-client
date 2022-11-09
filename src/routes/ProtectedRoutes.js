import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { FallingLines } from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const ProtectedRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <FallingLines
            color="#4fa94d"
            width="100"
            visible={true}
            ariaLabel='falling-lines-loading'
        />
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children;
};

export default ProtectedRoutes;