import React from 'react';

function StudentTable() {
  
  const students = [
    { name: "Srushti", city: "Ahmednagar", rollNumber: 12345, grade: 'A' },
    { name: "Siya", city: "Pune", rollNumber: 53321, grade: 'B' },
    { name: "Harry", city: "Mumbai", rollNumber: 88765, grade: 'A' },
    {name: "John", city:"Nagpur", rollNumber: 64747, grade:'A'},
    
  ];

  return (
    <div>
      <h1>Student Information</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Roll Number</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.city}</td>
              <td>{student.rollNumber}</td>
              <td>{student.grade}</td>
            </tr>
              ))}
        </tbody>
    </table>
    </div>
  );
}

export default StudentTable;
