import React from 'react';

function OldestAndYoungest() {
    const people = [
        { name: "Truong", age: 21, occupation: "Engineer" },
        { name: "Quang", age: 22, occupation: "Designer" },
        { name: "Huy", age: 26, occupation: "Engineer" },
        { name: "Khai", age: 50, occupation: "Student" }
    ];

    const tableStyle = {
        border: '1px solid #4b5563',
        borderCollapse: 'collapse',
        width: '100%',
        maxWidth: '600px',
        margin: '20px auto',
        fontFamily: 'Arial, sans-serif'
    };
    
    const thStyle = {
        border: '1px solid #4b5563',
        padding: '12px',
        backgroundColor: '#f3f4f6',
        textAlign: 'left',
        fontWeight: 'bold',
        color: '#1f2937'
    };
    
    const tdStyle = {
        border: '1px solid #4b5563',
        padding: '12px',
        textAlign: 'left',
        color: '#374151'
    };

    const oldest = people.reduce((max, person) => 
        person.age >= max.age ? person : max, people[0]);
    const youngest = people.reduce((min, person) => 
        person.age <= min.age ? person : min, people[0]);

    return (
        <div>
            <h2 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
                Oldest and Youngest Person
            </h2>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>Category</th>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>Age</th>
                        <th style={thStyle}>Occupation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={tdStyle}>Oldest</td>
                        <td style={tdStyle}>{oldest.name}</td>
                        <td style={tdStyle}>{oldest.age}</td>
                        <td style={tdStyle}>{oldest.occupation}</td>
                    </tr>
                    <tr>
                        <td style={tdStyle}>Youngest</td>
                        <td style={tdStyle}>{youngest.name}</td>
                        <td style={tdStyle}>{youngest.age}</td>
                        <td style={tdStyle}>{youngest.occupation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default OldestAndYoungest;