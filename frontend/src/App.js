import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ConstituencyPage from './pages/ConstituencyPage';
import AdminLoginPage from './pages/AdminLoginPage';

// Import the logo image from the assets folder
import logo from './assets/logo.png'; 

function App() {
  const navStyle = {
    backgroundColor: 'var(--dark-bg-secondary)',
    padding: '0.75rem 2rem', // Adjusted padding
    borderBottom: '1px solid var(--dark-border)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const navLinkStyle = {
    color: 'var(--dark-text)',
    textDecoration: 'none',
    margin: '0 15px',
    fontWeight: 500,
  };

  // Style for the logo link container
  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  };

  // Style for the logo image itself
  const logoImageStyle = {
    height: '40px', // Set the height of the logo
    marginRight: '10px',
  };

  // Style for the brand name text
  const logoTextStyle = {
    color: 'var(--dark-text)',
    fontWeight: 'bold',
    fontSize: '1.5rem',
  };
  
  return (
    <div>
      <nav style={navStyle}>
        <div>
          {/* Updated Logo and Title */}
          <Link to="/" style={logoContainerStyle}>
            <img src={logo} alt="Chunab Pulse Logo" style={logoImageStyle} />
            <span style={logoTextStyle}>चुनाव Pulse</span>
          </Link>
        </div>
        <div>
          <Link to="/" style={navLinkStyle}>Home</Link>
          <Link to="/constituency/1" style={navLinkStyle}>Constituency</Link>
          <Link to="/admin" style={navLinkStyle}>Admin</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/constituency/:id" element={<ConstituencyPage />} />
        <Route path="/admin" element={<AdminLoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
