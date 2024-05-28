import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TokenAccess = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            window.location.href = `${process.env.PUBLIC_URL}/sign-in`;
            navigate(`${process.env.PUBLIC_URL}/sign-in`)
        } else {
            setLoading(false);
        }
    }, [navigate]);

    if (loading) {
        return <h1>Loading...</h1>; 
    }

    return <>{children}</>;
};

export default TokenAccess;
