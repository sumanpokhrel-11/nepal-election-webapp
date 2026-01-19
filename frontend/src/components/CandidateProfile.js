import React from 'react';

// --- MOCK DATA ---
const profileData = {
    name: "Prakash Man Singh",
    party: "Nepali Congress",
    constituency: "Kathmandu-1",
    education: "Master's Degree in Public Administration",
    workExperience: "Former Deputy Prime Minister, extensive career in public service.",
    politicalActivity: "Active in politics since student life, key leader in the democratic movement.",
    photoUrl: "" // Placeholder for an image URL
};
// --- END MOCK DATA ---

const CandidateProfile = () => {
    const profileStyle = {
        padding: '2rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #e9ecef',
    };

    const headerStyle = { textAlign: 'center', marginBottom: '2rem' };
    const sectionStyle = { marginBottom: '1.5rem' };
    const sectionTitleStyle = { color: '#007bff', borderBottom: '2px solid #007bff', paddingBottom: '0.5rem' };

    return (
        <div style={profileStyle}>
            <header style={headerStyle}>
                <h2>{profileData.name}</h2>
                <p>{profileData.party} - {profileData.constituency}</p>
            </header>
            <main>
                <section style={sectionStyle}>
                    <h3 style={sectionTitleStyle}>Education</h3>
                    <p>{profileData.education}</p>
                </section>
                <section style={sectionStyle}>
                    <h3 style={sectionTitleStyle}>Work Experience</h3>
                    <p>{profileData.workExperience}</p>
                </section>
                <section style={sectionStyle}>
                    <h3 style={sectionTitleStyle}>Political Career</h3>
                    <p>{profileData.politicalActivity}</p>
                </section>
            </main>
        </div>
    );
}

export default CandidateProfile;
