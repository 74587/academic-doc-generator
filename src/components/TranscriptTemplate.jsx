import React, { forwardRef } from 'react';

const TranscriptTemplate = forwardRef(({ data }, ref) => {
  return (
    <div ref={ref} style={{ 
        fontFamily: "'Times New Roman', Times, serif", 
        lineHeight: 1.6, 
        padding: '40px', 
        color: '#333',
        backgroundColor: 'white',
        width: '800px',
        minHeight: '1000px',
        boxSizing: 'border-box'
    }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h1 style={{ margin: 0, fontSize: '24px', color: '#50212f' }}>{data.universityName}</h1>
            <h2 style={{ margin: '5px 0', fontSize: '20px', fontWeight: 'normal' }}>Office of the University Registrar</h2>
            <h3 style={{ margin: '5px 0' }}>Academic Transcript</h3>
        </div>

        <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '15px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                    <tr>
                        <td style={{ padding: '4px 8px' }}><strong>Name:</strong></td>
                        <td style={{ padding: '4px 8px' }}>{data.studentName}</td>
                        <td style={{ padding: '4px 8px' }}><strong>Student ID:</strong></td>
                        <td style={{ padding: '4px 8px' }}>{data.studentID}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '4px 8px' }}><strong>Date Issued:</strong></td>
                        <td style={{ padding: '4px 8px' }}>{data.issueDate}</td>
                        <td style={{ padding: '4px 8px' }}><strong>Program:</strong></td>
                        <td style={{ padding: '4px 8px' }}>{data.program}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '4px 8px' }}><strong>College:</strong></td>
                        <td style={{ padding: '4px 8px' }}>{data.college}</td>
                        <td style={{ padding: '4px 8px' }}><strong>Major:</strong></td>
                        <td style={{ padding: '4px 8px' }}>{data.major}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div>
            <div style={{ backgroundColor: '#e0e0e0', fontWeight: 'bold', padding: '10px', marginTop: '20px' }}>{data.term}</div>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Course</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Description</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Grade</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Hours</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Quality Pts</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>CS 1428</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>Foundations of Computer Science I</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>A</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>4.00</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>16.00</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>ENG 1310</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>College Writing I</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>B</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>3.00</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>9.00</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>MATH 2471</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>Calculus I</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>A</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>4.00</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>16.00</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>COMM 1310</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>Fundamentals of Human Communication</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>B</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>3.00</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>9.00</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>US 1100</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>University Seminar</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>A</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>1.00</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>4.00</td>
                    </tr>
                </tbody>
            </table>
            <table style={{ width: '100%', marginTop: '10px', borderCollapse: 'collapse' }}>
                <tbody>
                    <tr>
                        <td style={{ padding: '2px 8px' }}><strong>Term Totals:</strong></td>
                        <td style={{ padding: '2px 8px' }}>Attempted: 15.00</td>
                        <td style={{ padding: '2px 8px' }}>Earned: 15.00</td>
                        <td style={{ padding: '2px 8px' }}>GPA Hours: 15.00</td>
                        <td style={{ padding: '2px 8px' }}>Quality Points: 54.00</td>
                        <td style={{ padding: '2px 8px' }}><strong>Term GPA: 3.60</strong></td>
                    </tr>
                </tbody>
            </table>

            <div style={{ backgroundColor: '#e0e0e0', fontWeight: 'bold', padding: '10px', marginTop: '20px' }}>Spring 2025</div>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Course</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Description</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Grade</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Hours</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Quality Pts</th>
                    </tr>
                </thead>
                 <tbody>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>CS 2308</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>Foundations of Computer Science II</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>B</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>3.00</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>9.00</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>MATH 2358</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>Discrete Mathematics I</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>B</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>3.00</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>9.00</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>ENG 1320</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>College Writing II</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>A</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>3.00</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>12.00</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>HIST 1310</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>History of the United States to 1877</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>C</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>3.00</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>6.00</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>PHYS 1430</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>Mechanics</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>B</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>4.00</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>12.00</td>
                    </tr>
                </tbody>
            </table>
            <table style={{ width: '100%', marginTop: '10px', borderCollapse: 'collapse' }}>
                <tbody>
                    <tr>
                        <td style={{ padding: '2px 8px' }}><strong>Term Totals:</strong></td>
                        <td style={{ padding: '2px 8px' }}>Attempted: 16.00</td>
                        <td style={{ padding: '2px 8px' }}>Earned: 16.00</td>
                        <td style={{ padding: '2px 8px' }}>GPA Hours: 16.00</td>
                        <td style={{ padding: '2px 8px' }}>Quality Points: 48.00</td>
                        <td style={{ padding: '2px 8px' }}><strong>Term GPA: 3.00</strong></td>
                    </tr>
                </tbody>
            </table>
            
            <div style={{ marginTop: '25px', borderTop: '2px solid #333', paddingTop: '10px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                     <tbody>
                     <tr>
                        <td style={{ padding: '2px 8px' }}><strong>Cumulative Totals:</strong></td>
                        <td style={{ padding: '2px 8px' }}>Attempted: 31.00</td>
                        <td style={{ padding: '2px 8px' }}>Earned: 31.00</td>
                        <td style={{ padding: '2px 8px' }}>GPA Hours: 31.00</td>
                        <td style={{ padding: '2px 8px' }}>Quality Points: 102.00</td>
                        <td style={{ padding: '2px 8px' }}><strong>Cumulative GPA: 3.29</strong></td>
                    </tr>
                     <tr>
                        <td style={{ padding: '2px 8px' }}><strong>Academic Standing:</strong></td>
                        <td colSpan="5" style={{ padding: '2px 8px' }}>Good Standing</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div style={{ marginTop: '40px', fontStyle: 'italic', fontSize: '12px', color: '#666', textAlign: 'center' }}>
            *** END OF TRANSCRIPT ***
        </div>
    </div>
  );
});

export default TranscriptTemplate;
