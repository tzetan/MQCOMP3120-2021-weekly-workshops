import React from 'react';
// import './App.css';
import Unit from './Unit'

function App() {

  const units = [
    { code: 'COMP1010', title: 'Fundamentals of Computer Science', offering: ['S1', 'S2'] },
    { code: 'COMP1750', title: 'Introduction to Business Information Systems', offering: ['S1'] },
    { code: 'COMP2110', title: 'Web Technology', offering: ['S1', 'S2'] },
    { code: 'COMP2750', title: 'Applications Modelling and Development', offering: ['S1'] },
    { code: 'MMCC2045', title: 'Interactive Web Design', offering: ['S2'] },
    { code: 'COMP3120', title: 'Advanced Web Development', offering: ['S2'] },
    { code: 'COMP3130', title: 'Mobile Application Development', offering: ['S1'] }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h2> COMP3120: Advanced Web Development </h2>
        <ul>
          {units.map(unit => <Unit key={unit.code} unit={unit} />)}
          {/* <Unit code = "COMP3120" title = "Advanced Web Development" /> */}
        </ul>
      </header>
    </div>
  )
}

export default App;
