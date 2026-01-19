import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Import the page components
import HomePage from './pages/HomePage';
import ConstituencyPage from './pages/ConstituencyPage';
import AdminLoginPage from './pages/AdminLoginPage';

// For demonstration, let's also import the AdminDashboard to show a protected route concept
import AdminDashboard from './components/AdminDashboard'; 
// And a candidate profile page
import CandidateProfile from './components/CandidateProfile';

function App() {
  const navStyle = {
    backgroundColor: '#333',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '1.1rem',
  };

  const logoStyle = {
    ...navLinkStyle,
    fontWeight: 'bold',
    fontSize: '1.5rem',
  };
  
  const mainContentStyle = {
    padding: '1rem',
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav style={navStyle}>
        <div>
          <Link to="/" style={logoStyle}>🇳🇵 Election App</Link>
        </div>
        <div>
          <Link to="/" style={navLinkStyle}>Home</Link>
          {/* This link simulates navigating to a specific constituency */}
          <Link to="/constituency/1" style={navLinkStyle}>Constituency Example</Link>
          <Link to="/admin" style={navLinkStyle}>Admin Login</Link>
        </div>
      </nav>

      {/* Main Content Area where Routes are Rendered */}
      <main style={mainContentStyle}>
        <Routes>
          {/* Route for the Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Dynamic Route for a specific Constituency */}
          {/* The ':id' is a URL parameter that can be accessed in the ConstituencyPage component */}
          <Route path="/constituency/:id" element={<ConstituencyPage />} />
          
          {/* Dynamic Route for a specific Candidate Profile */}
          <Route path="/candidate/:id" element={<CandidateProfile />} />

          {/* Route for the Admin Login Page */}
          <Route path="/admin" element={<AdminLoginPage />} />
          
          {/* A conceptual "protected" route for the admin dashboard */}
          {/* In a real app, this would be wrapped in a component that checks for authentication */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
