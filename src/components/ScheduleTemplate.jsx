import React, { forwardRef } from 'react';

const ScheduleTemplate = forwardRef(({ data }, ref) => {
  return (
    <div ref={ref} style={{ 
        fontFamily: "Arial, sans-serif", 
        lineHeight: 1.5, 
        padding: '40px', 
        color: '#333',
        backgroundColor: 'white',
        width: '800px',
        minHeight: '1000px',
        boxSizing: 'border-box'
    }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h1 style={{ margin: 0, fontSize: '24px', color: '#50212f' }}>{data.universityName}</h1>
            <h2 style={{ margin: '5px 0', fontSize: '18px', fontWeight: 'normal' }}>Student Course Schedule</h2>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', backgroundColor: '#f9f9f9', padding: '10px', border: '1px solid #ddd' }}>
            <div><strong>Student:</strong> {data.studentName}</div>
            <div><strong>Student ID:</strong> {data.studentID}</div>
            <div><strong>Term:</strong> {data.term}</div>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
            <thead>
                <tr>
                    <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Course</th>
                    <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Description</th>
                    <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Credits</th>
                    <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Days</th>
                    <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Time</th>
                    <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Location</th>
                    <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Instructor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>CS 1428</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>Foundations of Computer Science I</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>4.00</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>Mon, Wed, Fri</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>10:00 AM - 10:50 AM</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>DERR 238</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>Williams, D.</td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>ENG 1310</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>College Writing I</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>3.00</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>Tue, Thu</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>12:30 PM - 1:50 PM</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>CENT 114</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>Miller, S.</td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>MATH 2471</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>Calculus I</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>4.00</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>Mon, Wed, Fri</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>1:00 PM - 1:50 PM</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>MCS 590</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>Johnson, P.</td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>COMM 1310</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>Fundamentals of Human Communication</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>3.00</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>Tue, Thu</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>9:30 AM - 10:50 AM</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>FH G01</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>Garcia, A.</td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>US 1100</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>University Seminar</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>1.00</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>Wed</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>3:30 PM - 4:20 PM</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>UAC 105</td>
                    <td style={{ border: '1px solid #ddd', padding: '10px' }}>Brown, M.</td>
                </tr>
            </tbody>
        </table>
        
        <div style={{ textAlign: 'right', fontWeight: 'bold', marginTop: '10px' }}>
            Total Registered Credits: 15.00
        </div>

        <div style={{ textAlign: 'center', marginTop: '30px', fontSize: '12px', color: '#777' }}>
            Schedule is subject to change. <br />
        </div>
    </div>
  );
});

export default ScheduleTemplate;
