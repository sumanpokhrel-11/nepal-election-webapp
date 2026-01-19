import React from 'react';

const CandidateCard = ({ candidate }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1.5rem',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
  };
  
  // A simple hover effect can be done with CSS-in-JS but is easier with a real CSS file or library
  // For simplicity, we'll just imply it's clickable.
  
  const nameStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#333',
    margin: '1rem 0 0.5rem 0',
  };
  
  const partyStyle = {
    fontSize: '1rem',
    color: '#555',
  };

  const placeholderImageStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: '#ccc',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontWeight: 'bold',
  };

  const handleClick = () => {
    alert(`Showing details for ${candidate.name}`);
    // In a real app, this would navigate to the candidate's full profile page.
    // e.g., history.push(`/candidate/${candidate.id}`);
  };

  return (
    <div style={cardStyle} onClick={handleClick}>
      <div style={placeholderImageStyle}>Photo</div>
      <h3 style={nameStyle}>{candidate.name}</h3>
      <p style={partyStyle}>{candidate.party}</p>
    </div>
  );
};

export default CandidateCard;

