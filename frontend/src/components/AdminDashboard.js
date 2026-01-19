import React from 'react';

const AdminDashboard = () => {
    const dashboardStyle = {
        padding: '2rem',
    };

    const headerStyle = {
        textAlign: 'center',
        marginBottom: '2rem',
        borderBottom: '2px solid #333',
        paddingBottom: '1rem',
    };

    const sectionStyle = {
        marginBottom: '2rem',
        padding: '1.5rem',
        border: '1px solid #ddd',
        borderRadius: '8px',
    };
    
    const sectionTitleStyle = {
        marginTop: '0',
    };
    
    const buttonStyle = {
        marginRight: '10px',
        padding: '10px 15px',
        cursor: 'pointer'
    };

    return (
        <div style={dashboardStyle}>
            <header style={headerStyle}>
                <h1>Admin Dashboard</h1>
            </header>

            <section style={sectionStyle}>
                <h2 style={sectionTitleStyle}>Manage Candidates</h2>
                <p>Here you can add, edit, or delete candidate profiles.</p>
                <button style={buttonStyle}>Add New Candidate</button>
                <button style={buttonStyle}>View All Candidates</button>
            </section>

            <section style={sectionStyle}>
                <h2 style={sectionTitleStyle}>Manage Constituencies</h2>
                <p>Update constituency information and geographical data.</p>
                <button style={buttonStyle}>Add New Constituency</button>
            </section>

            <section style={sectionStyle}>
                <h2 style={sectionTitleStyle}>Manage Parties</h2>
                <p>Update party manifestos and logos.</p>
                <button style={buttonStyle}>Add New Party</button>
            </section>
        </div>
    );
};

export default AdminDashboard;
