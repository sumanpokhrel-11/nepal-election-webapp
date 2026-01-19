import React from 'react';

// Import placeholder components. In a real app, these would be in the /components folder.
import CandidateCard from '../components/CandidateCard';
import HistoricalResults from '../components/HistoricalResults';
import CommentSection from '../components/CommentSection';
import VoteModal from '../components/VoteModal';


// --- MOCK DATA (will be replaced by API calls) ---
const constituencyData = {
  name: 'Kathmandu-1',
  state: 'Bagmati Province',
};

const candidates = [
  { id: 1, name: 'Prakash Man Singh', party: 'Nepali Congress' },
  { id: 2, name: 'Rabindra Mishra', party: 'Rastriya Prajatantra Party' },
  { id: 3, name: 'Pukar Bam', party: 'Rastriya Swatantra Party' },
];
// --- END MOCK DATA ---


const ConstituencyPage = () => {
  const pageStyle = {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const headerStyle = {
    borderBottom: '2px solid #eee',
    paddingBottom: '1rem',
    marginBottom: '2rem',
  };

  const sectionStyle = {
    marginBottom: '3rem',
  };
  
  const sectionTitleStyle = {
    fontSize: '1.8rem',
    color: '#444',
    marginBottom: '1.5rem',
  };

  const candidateGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1.5rem',
  };

  return (
    <div style={pageStyle}>
      <header style={headerStyle}>
        <h1>{constituencyData.name}</h1>
        <p style={{ color: '#555' }}>{constituencyData.state}</p>
      </header>

      <main>
        {/* Candidates Section */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Candidates for Upcoming Election</h2>
          <div style={candidateGridStyle}>
            {candidates.map(candidate => (
              <CandidateCard key={candidate.id} candidate={candidate} />
            ))}
          </div>
        </section>

        {/* Voting Section */}
        <VoteModal candidates={candidates} />

        {/* Historical Results Section */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Past Election Results</h2>
          <HistoricalResults constituencyId={1} /> {/* Pass ID to fetch data */}
        </section>

        {/* Comments Section */}
        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Community Discussion</h2>
          <CommentSection constituencyId={1} /> {/* Pass ID to fetch data */}
        </section>
      </main>
    </div>
  );
};

export default ConstituencyPage;
