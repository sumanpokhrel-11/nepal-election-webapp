import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ConstituencyPage from './pages/ConstituencyPage';
import AdminLoginPage from './pages/AdminLoginPage';

function App() {
  const navStyle = {
    backgroundColor: 'var(--dark-bg-secondary)',
    padding: '1rem 2rem',
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

  const logoStyle = { ...navLinkStyle, fontWeight: 'bold', fontSize: '1.5rem', color: 'var(--primary)' };
  
  return (
    <div>
      <nav style={navStyle}>
        <div>
          <Link to="/" style={logoStyle}>🇳🇵 Votify</Link>
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
