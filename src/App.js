import './App.css';
import { useState } from 'react'
const studentData = [
  {
    studentName: 'Ayush',
    marks: {
      "physics": 89,
      "chemistry": 78,
      "math": 90
    },
  },
  {
    studentName: 'Bhanu',
    marks: {
      "acc": 89,
      "eco": 78,
      "math": 90
    }
  }
]

function App() {
  const [student, setStudent] = useState('');
  const [subject, setSubject] = useState('');

  const handleStudent = (val) => {
    setStudent(val);
    setSubject('');
  }

  return (
    <div className="App">
      <select onChange={(e) => handleStudent(e.target.value)}>
        <option value={''}>Select Student</option>
        {
          studentData.map((item, index) => {
            return (<option value={index} key={index}>{item.studentName}</option>)
          })
        }
      </select>
      <select onChange={(e) => setSubject(e.target.value)}>
      <option value={''}>Select Subject</option>
        {student && Object.keys(studentData[student].marks).map(item => {
          return (<option vlaue={item} key={item}>{item}</option>)
        })}
      </select>
      <p>Marks: {(student && subject) ? studentData[student].marks[subject]: "--"}</p>
    </div>
  );
}

export default App;
