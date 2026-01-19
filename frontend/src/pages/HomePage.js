import React from 'react';
import ThreeDMap from '../components/ThreeDMap'; // Placeholder for the map component

const HomePage = () => {
  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '2rem',
  };

  const headerStyle = {
    marginBottom: '2rem',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '0.5rem',
  };

  const subtitleStyle = {
    fontSize: '1.2rem',
    color: '#666',
  };

  return (
    <div style={pageStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Nepal Election Explorer</h1>
        <p style={subtitleStyle}>
          Click on a constituency on the map to see candidates and details.
        </p>
      </header>
      
      {/* 
        This is where the interactive 3D map will be rendered.
        For now, it's a placeholder component.
      */}
      <ThreeDMap />
    </div>
  );
};

export default HomePage;
