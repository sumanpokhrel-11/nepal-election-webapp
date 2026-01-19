import React, { useState } from 'react';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, you would send the email and password to your API
    // POST /admin/login 
    alert(`Logging in with:\nEmail: ${email}\nPassword: ${password}`);
    // On successful login, you would redirect to the admin dashboard
  };

  const pageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f7f6',
  };

  const formContainerStyle = {
    padding: '3rem',
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
  };

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#333',
  };

  const inputGroupStyle = {
    marginBottom: '1.5rem',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#555',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.8rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.9rem',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '1rem',
  };

  return (
    <div style={pageStyle}>
      <div style={formContainerStyle}>
        <h1 style={titleStyle}>Admin & Staff Login</h1>
        <form onSubmit={handleLogin}>
          <div style={inputGroupStyle}>
            <label htmlFor="email" style={labelStyle}>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={inputGroupStyle}>
            <label htmlFor="password" style={labelStyle}>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
