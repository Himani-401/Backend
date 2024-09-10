import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        setMessage('Login successful! Redirecting...');
        setTimeout(() => {
          navigate('/'); 
        }, 2000);
      } else {
        const data = await response.json();
        setMessage(data.message || 'Login failed. Redirecting to sign-up page...');
        setTimeout(() => {
          navigate('/signup');
        }, 2000); 
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="text-section">
        <h1>Welcome Back!</h1>
        <p>Please log in to access your dashboard and continue where you left off.</p>
      </div>
      <div className="login-container">
        <h2 className="login-title">Log In</h2>
        <form onSubmit={handleLogin} className="login-form">
          <label htmlFor="username" className='username-label'>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password" className='password-label'>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
          {message && <p className="error-message">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
