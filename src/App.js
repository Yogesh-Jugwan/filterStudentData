import './App.css';
import { useState } from 'react'
const studentData = [
  {
    studentName: 'A',
    marks: {
      "physics": 89,
      "chemistry": 78,
      "math": 90
    },
  },
  {
    studentName: 'B',
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

  return (
    <div className="App">
      <select onChange={(e) => setStudent(e.target.value)}>
        <option value={''}></option>
        {
          studentData.map((item, index) => {
            return (<option value={index} key={index}>{item.studentName}</option>)
          })
        }
      </select>
      <select onChange={(e) => setSubject(e.target.value)}>
        {student && Object.keys(studentData[student].marks).map(item => {
          return (<option vlaue={item} key={item}>{item}</option>)
        })}
      </select>
      <p>{subject}: {(student && subject) && studentData[student].marks[subject]}</p>
    </div>
  );
}

export default App;
