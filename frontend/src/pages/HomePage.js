import React from 'react';
import ThreeDMap from '../components/ThreeDMap';
import CandidateCard from '../components/CandidateCard';

const candidates = [
  { id: 1, name: 'Prakash Man Singh', party: 'Nepali Congress', type: 'Direct' },
  { id: 2, name: 'Rabindra Mishra', party: 'RPP', type: 'Direct' },
  { id: 3, name: 'Pukar Bam', party: 'RSP', type: 'Direct' },
  { id: 4, name: 'Gagan Thapa', party: 'Nepali Congress', type: 'PR' },
];

const HomePage = () => {
  const homeStyle = {
    display: 'flex',
    height: 'calc(100vh - 65px)', // Full height minus navbar
  };

  const mapContainerStyle = {
    flex: 1,
    height: '100%',
  };
  
  const listContainerStyle = {
    flex: 1,
    height: '100%',
    overflowY: 'auto',
    padding: '1rem',
    backgroundColor: 'var(--dark-bg-secondary)',
  };
  
  const listHeader = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'var(--primary)',
    marginBottom: '1rem',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid var(--primary)',
  };

  return (
    <div style={homeStyle}>
      <div style={mapContainerStyle}>
        <ThreeDMap />
      </div>
      <div style={listContainerStyle}>
        <h2 style={listHeader}>Candidates: Kathmandu-1</h2>
        {candidates.map(candidate => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
