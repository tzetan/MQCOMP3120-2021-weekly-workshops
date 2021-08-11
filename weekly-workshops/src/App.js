import React from 'react';
// import './App.css';
import Unit from './Unit'
import UnitList from './UnitList'
import { useState } from 'react'

const unitList = [
  { code: 'COMP1010', title: 'Fundamentals of Computer Science', offering: ['S1', 'S2'] },
  { code: 'COMP1750', title: 'Introduction to Business Information Systems', offering: ['S1'] },
  { code: 'COMP2110', title: 'Web Technology', offering: ['S1', 'S2'] },
  { code: 'COMP2750', title: 'Applications Modelling and Development', offering: ['S1'] },
  { code: 'MMCC2045', title: 'Interactive Web Design', offering: ['S2'] },
  { code: 'COMP3120', title: 'Advanced Web Development', offering: ['S2'] },
  { code: 'COMP3130', title: 'Mobile Application Development', offering: ['S1'] }
]


function App() {

  const [units, setUnits] = useState(unitList)
  const [newUnitCode, setNewUnitCode] = useState('')
  const [newUnitTitle, setNewUnitTitle] = useState('')

  const addUnit = (event) => {
    event.preventDefault()

    const newUnit = {
      code: newUnitCode,
      title: newUnitTitle,
      offering: ['S1'],
    }

    setUnits(units.concat(newUnit))
  }

  // const handleUnitCode

  return (
    <div className="App">
      <header className="App-header">
        <h2> COMP3120: Advanced Web Development </h2>
      </header>
      <ul>
        <UnitList content={units} />
        {/* {units.map(unit => <Unit key={unit.code} unit={unit} />)} */}
      </ul>
      <form onSubmit={addUnit}>
        <input />
        <input />
        <button type="submit"> Add </button>
      </form>
    </div>
  )
}

export default App;
