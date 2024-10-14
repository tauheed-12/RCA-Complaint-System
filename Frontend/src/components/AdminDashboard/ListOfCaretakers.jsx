import React from 'react';

function ListOfCaretakers() {
    // Updated list of caretakers with Muslim names and contact information
    const caretakers = [
        { id: 1, name: "Ayesha Siddiqui", details: "Caretaker for Block A", contact: "ayesha.s@example.com" },
        { id: 2, name: "Fatima Khan", details: "Caretaker for Block B", contact: "fatima.k@example.com" },
        { id: 3, name: "Ali Raza", details: "Caretaker for Block C", contact: "ali.raza@example.com" },
        { id: 4, name: "Zainab Ali", details: "Caretaker for Block D", contact: "zainab.ali@example.com" },
        { id: 5, name: "Hamza Malik", details: "Caretaker for Block E", contact: "hamza.malik@example.com" },
        { id: 6, name: "Sara Ahmed", details: "Caretaker for Block F", contact: "sara.ahmed@example.com" }
    ];

    return (
        <>
            {caretakers.map(caretaker => (
                <div key={caretaker.id} style={styles.section}>
                    <h2 style={styles.heading}>{caretaker.name}</h2>
                    <p style={styles.text}><strong>Block:</strong> {caretaker.details}</p>
                    <p style={styles.text}><strong>Contact:</strong> {caretaker.contact}</p>
                </div>
            ))}
        </>
    );
}

const styles = {
    section: {
        backgroundColor: '#E8E9ED', // jmi-grey for the section background
        padding: '30px',
        marginBottom: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)', 
        textAlign: 'center',
    },
    heading: {
        backgroundColor: '#45A967', // jmi-green for the text background
        color: '#fff', // White text color
        padding: '10px',
        fontSize: '1.8rem',
        marginBottom: '15px',
        borderRadius: '8px',
        fontFamily: 'Roboto, Arial, sans-serif'
    },
    text: {
        backgroundColor: '#45A967', // jmi-green for the text background
        color: '#fff', // White text color
        padding: '10px',
        fontSize: '1rem',
        borderRadius: '8px',
        margin: '10px 0',
        fontFamily: 'Roboto, Arial, sans-serif'
    }
};

export default ListOfCaretakers;
