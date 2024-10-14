import React from 'react';

function ComplaintVerification() {
    // List of mock complaints
    const complaints = [
        { id: 1, name: "Ayesha Siddiqui", complaint: "No hot water in Block A bathrooms", status: "Pending" },
        { id: 2, name: "Fatima Khan", complaint: "Leaking roof in Block B", status: "Under Review" },
        { id: 3, name: "Ali Raza", complaint: "AC not working in Block C", status: "Resolved" },
        { id: 4, name: "Zainab Ali", complaint: "Broken window in Block D", status: "Pending" },
        { id: 5, name: "Hamza Malik", complaint: "Power outage in Block E during night", status: "Under Review" },
        { id: 6, name: "Sara Ahmed", complaint: "Unclean washrooms in Block F", status: "Pending" }
    ];

    return (
        <>
            <div style={styles.section}>
                <h2 style={styles.heading}>Complaint Verification</h2>
                {complaints.map(complaint => (
                    <div key={complaint.id} style={styles.complaintCard}>
                        <h3 style={styles.complaintName}>{complaint.name}</h3>
                        <p style={styles.text}><strong>Complaint:</strong> {complaint.complaint}</p>
                        <p style={styles.text}><strong>Status:</strong> {complaint.status}</p>
                        
                        <div style={styles.verifySection}>
                            <input type="checkbox" id={`verify-${complaint.id}`} style={styles.checkbox}/>
                            <label htmlFor={`verify-${complaint.id}`} style={styles.verifyLabel}>Verify</label>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

const styles = {
    section: {
        backgroundColor: '#E8E9ED', // jmi-grey background
        padding: '30px',
        marginBottom: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
        textAlign: 'center',
    },
    heading: {
        backgroundColor: '#45A967', // jmi-green background
        color: '#fff', // White text
        padding: '10px',
        fontSize: '1.8rem',
        marginBottom: '15px',
        borderRadius: '8px',
        fontFamily: 'Roboto, Arial, sans-serif',
    },
    complaintCard: {
        backgroundColor: '#45A967', // jmi-green background for each complaint card
        color: '#fff', // White text
        padding: '15px',
        marginBottom: '15px',
        borderRadius: '8px',
        textAlign: 'left', // Align complaint details to the left
        position: 'relative', // For absolute positioning of checkbox and button
    },
    complaintName: {
        fontSize: '1.4rem',
        marginBottom: '8px',
    },
    text: {
        fontSize: '1rem',
        margin: '5px 0',
        fontFamily: 'Roboto, Arial, sans-serif',
    },
    verifySection: {
        position: 'absolute',
        top: '15px',
        right: '15px',
        display: 'flex',
        alignItems: 'center',
    },
    checkbox: {
        marginRight: '5px',
        cursor: 'pointer',
    },
    verifyLabel: {
        color: '#fff',
        cursor: 'pointer',
    }
};

export default ComplaintVerification;
