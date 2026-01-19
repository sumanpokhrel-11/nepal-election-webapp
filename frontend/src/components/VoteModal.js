import React, { useState } from 'react';

const VoteModal = ({ candidates }) => {
  const [selectedCandidate, setSelectedCandidate] = useState('');

  const handleSubmitVote = () => {
    if (!selectedCandidate) {
      alert('Please select a candidate or "No Vote" before submitting.');
      return;
    }
    alert(`Thank you for your mock vote for: ${selectedCandidate}`);
    // In a real app, this would send a request to the POST /vote endpoint.
  };

  const containerStyle = {
    border: '1px solid #007bff',
    borderRadius: '8px',
    padding: '2rem',
    marginTop: '2rem',
    backgroundColor: '#f0f8ff',
  };

  const selectStyle = {
    width: '100%',
    padding: '0.8rem',
    fontSize: '1rem',
    marginBottom: '1rem',
  };
  
  const buttonStyle = {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  };

  return (
    <div style={containerStyle}>
      <h3 style={{ marginTop: 0 }}>Cast Your Mock Vote</h3>
      <select 
        style={selectStyle}
        value={selectedCandidate}
        onChange={(e) => setSelectedCandidate(e.target.value)}
      >
        <option value="" disabled>-- Select an option --</option>
        {candidates.map(c => (
          <option key={c.id} value={c.name}>{c.name} ({c.party})</option>
        ))}
        <option value="No Vote">--- No Vote ---</option>
      </select>
      <button style={buttonStyle} onClick={handleSubmitVote}>Submit Vote</button>
    </div>
  );
};

export default VoteModal;

