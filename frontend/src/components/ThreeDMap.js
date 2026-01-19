import React from 'react';

const ThreeDMap = () => {
  const mapContainerStyle = {
    height: '60vh',
    width: '100%',
    backgroundColor: '#e9ecef',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
    border: '2px dashed #adb5bd',
  };

  const mapTextStyle = {
    color: '#495057',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };
  
  const mapSubTextStyle = {
    color: '#6c757d',
    marginTop: '0.5rem',
  };

  const handleClick = () => {
    // In a real app, clicking the map would trigger a navigation
    // or display information about the clicked constituency.
    alert('Navigating to Constituency: Kathmandu-1 (Example)');
    // For a real app, you would use react-router-dom:
    // history.push('/constituency/1');
  };

  return (
    <div style={mapContainerStyle} onClick={handleClick}>
      <div style={mapTextStyle}>[ Interactive 3D Map Placeholder ]</div>
      <p style={mapSubTextStyle}>Click here to simulate selecting a constituency.</p>
    </div>
  );
};

export default ThreeDMap;
