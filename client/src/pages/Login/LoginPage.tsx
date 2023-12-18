import React, { useState } from 'react';
import './LoginPage.css';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

// import { login } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    
    const handleLogin = async (username: string, password: string) => {
        try {
            // const response = await login(username, password);
            // console.log(response);
            if (username === 'kaleidoo' && password === 'kaleidoo') {
                navigate('/dashboard');
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            } else {
                console.error('An unknown error occurred');
            }
        }
    };

    const handleLoginSubmit = async (event: any) => {
        event.preventDefault();
        handleLogin(username, password);
    };

    return (
        <div>
            <Header header="Welcome to NirLir" />
            <form className="loginForm" onSubmit={handleLoginSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" text="Login" onClick={() => {}} />
            </form>
            <Footer />
        </div>
    );
};

export default LoginPage;
