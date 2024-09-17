import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerifyEmail = () => {
    const navigate = useNavigate();
    const [verificationStatus, setVerificationStatus] = useState('Verifying...');

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };

    const token = useQuery().get('token');

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await axios.post('http://localhost:8080/auth/verifyEmail', { token });
                setVerificationStatus(response.data.message);
                setTimeout(() => {
                    navigate('/auth/login');
                }, 3000);
            } catch (error) {
                console.error('Verification error:', error.response?.data || error.message);
                setVerificationStatus('Verification failed. Please try again or contact support.');
            }
        };

        if (token) {
            verifyEmail();
        } else {
            setVerificationStatus('Invalid verification link. Please check your email and try again.');
        }
    }, [token, navigate]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-jmi-grey">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
                <h3 className="text-jmi-green text-2xl font-bold mb-6">{verificationStatus}</h3>
                {verificationStatus === 'Verifying...' && <p>Please wait...</p>}
            </div>
        </div>
    );
};

export default VerifyEmail;
