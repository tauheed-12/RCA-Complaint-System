import React from 'react';

function VerifyCaretakers() {
    // Mock data for caretakers to be verified
    const caretakers = [
        { id: 1, name: "Ayesha Siddiqui", email: "ayesha.siddiqui@example.com", phone: "9876543210", block: "Block A", joiningDate: "01-Jan-2023" },
        { id: 2, name: "Fatima Khan", email: "fatima.khan@example.com", phone: "8765432109", block: "Block B", joiningDate: "15-Feb-2023" },
        { id: 3, name: "Zainab Ali", email: "zainab.ali@example.com", phone: "7654321098", block: "Block C", joiningDate: "20-Mar-2023" },
        { id: 4, name: "Sara Ahmed", email: "sara.ahmed@example.com", phone: "6543210987", block: "Block D", joiningDate: "30-Apr-2023" },
        { id: 5, name: "Amina Malik", email: "amina.malik@example.com", phone: "5432109876", block: "Block A", joiningDate: "10-May-2023" }
    ];

    return (
        <>
            {caretakers.map((caretaker) => (
                <div style={styles.section} key={caretaker.id}>
                    <p><strong>Name:</strong> {caretaker.name}</p>
                    <p><strong>Email:</strong> {caretaker.email}</p>
                    <p><strong>Phone:</strong> {caretaker.phone}</p>
                    <p><strong>Block:</strong> {caretaker.block}</p>
                    <p><strong>Joining Date:</strong> {caretaker.joiningDate}</p>
                    <div style={styles.verifyBox}>
                        <label>
                            <input type="checkbox"/>
                            Verify
                        </label>
                    </div>
                </div>
            ))}
        </>
    );
}

const styles = {
    section: {
        backgroundColor: '#45A967', // jmi-green
        color: 'white',
        padding: '20px',
        margin: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    },
    verifyBox: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '10px'
    }
};

export default VerifyCaretakers;
