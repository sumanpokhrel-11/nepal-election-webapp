import React from 'react';

// --- MOCK DATA ---
const results = [
  { year: 2018, winner: 'Gagan Thapa', party: 'Nepali Congress', votes: 21558 },
  { year: 2013, winner: 'Gagan Thapa', party: 'Nepali Congress', votes: 22336 },
];
// --- END MOCK DATA ---

const HistoricalResults = ({ constituencyId }) => {
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '1rem',
  };
  
  const thStyle = {
    backgroundColor: '#f2f2f2',
    padding: '12px',
    border: '1px solid #ddd',
    textAlign: 'left',
  };

  const tdStyle = {
    padding: '12px',
    border: '1px solid #ddd',
  };

  return (
    <div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Election Year</th>
            <th style={thStyle}>Winning Candidate</th>
            <th style={thStyle}>Party</th>
            <th style={thStyle}>Votes Received</th>
          </tr>
        </thead>
        <tbody>
          {results.map(result => (
            <tr key={result.year}>
              <td style={tdStyle}>{result.year}</td>
              <td style={tdStyle}>{result.winner}</td>
              <td style={tdStyle}>{result.party}</td>
              <td style={tdStyle}>{result.votes.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoricalResults;
