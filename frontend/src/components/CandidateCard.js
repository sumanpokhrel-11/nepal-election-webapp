import React from 'react';

const CandidateCard = ({ candidate }) => {
  const cardStyle = {
    backgroundColor: 'var(--dark-bg)',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid var(--dark-border)',
    transition: 'border-color 0.2s',
  };

  const placeholderImageStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'var(--dark-border)',
    marginRight: '1rem',
    flexShrink: 0,
  };

  const infoStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const nameStyle = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: 'var(--dark-text)',
    margin: 0,
  };
  
  const partyStyle = {
    fontSize: '0.9rem',
    color: 'var(--primary)',
    margin: '4px 0 0 0',
  };

  return (
    <div style={cardStyle} onMouseOver={e => e.currentTarget.style.borderColor = 'var(--primary)'} onMouseOut={e => e.currentTarget.style.borderColor = 'var(--dark-border)'}>
      <div style={placeholderImageStyle}></div>
      <div style={infoStyle}>
        <h3 style={nameStyle}>{candidate.name}</h3>
        <p style={partyStyle}>{candidate.party} ({candidate.type})</p>
      </div>
    </div>
  );
};

export default CandidateCard;
