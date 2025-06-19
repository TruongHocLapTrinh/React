import { Button } from 'react-bootstrap';

const NameList = ({ names }) => {
    return (
        <div>
            <ul>
                {names.map((name, index) => (
                <li key={index}>{name}</li>
                ))}
            </ul>
            <table border="1" style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {names.map((name, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{name}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{name}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Button variant="primary" onClick={() => alert('Button clicked!')}>
                Click Me
            </Button>
        </div>
    );
};

export default NameList;
  