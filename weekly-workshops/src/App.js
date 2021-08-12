import React, { useState } from 'react';
// import './App.css';
// import Unit from './Unit'
import UnitList from './UnitList'
import Form from './Form';

const unitList = [
  { id: 0, code: 'COMP1010', title: 'Fundamentals of Computer Science', offering: ['S1', 'S2'] },
  { id: 1, code: 'COMP1750', title: 'Introduction to Business Information Systems', offering: ['S1'] },
  { id: 2, code: 'COMP2110', title: 'Web Technology', offering: ['S1', 'S2'] },
  { id: 3, code: 'COMP2750', title: 'Applications Modelling and Development', offering: ['S1'] },
  { id: 4, code: 'MMCC2045', title: 'Interactive Web Design', offering: ['S2'] },
  { id: 5, code: 'COMP3120', title: 'Advanced Web Development', offering: ['S2'] },
  { id: 6, code: 'COMP3130', title: 'Mobile Application Development', offering: ['S1'] }
]


function App() {

  const [units, setUnits] = useState(unitList)


  const addUnit = ({ newUnitCode, newUnitTitle, newUnitOfferings, items }) => {
    // event.preventDefault()

    // setUnits([...units, { id: units.length, items: items }])

    const newUnit = {
      code: newUnitCode,
      title: newUnitTitle,
      offering: newUnitOfferings,
    }

    setUnits(units.concat(newUnit))
  }

  // const handleUnitCode 

  return (
    <div className="App">

      <header className="App-header">
        <h2> COMP3120: Advanced Web Development </h2>
      </header>

      <UnitList content={units} />

      <Form updateFn={addUnit} />

      {/* <form onSubmit={addUnit}>
        <label>
          Unit Code:
          <input
            value={newUnitCode}
            onChange={(inputText) => setNewUnitCode(inputText.target.value)}
          />
        </label>
        <label>
          Unit Title:
          <input
            value={newUnitTitle}
            onChange={(inputText) => setNewUnitTitle(inputText.target.value)}
          />
        </label>

        <label> Unit Offerings: </label>
        {offerings.map((offering, key) =>
          <label key={key}>
            {offering}
            <input
              value={offering}
              onChange={(offering) => setNewUnitOfferings(newUnitOfferings.concat(offering.target.value))}
              type="checkbox"
            />
          </label>
        )}

        <button type="submit"> Add </button>
      </form> */}

    </div>
  )
}

export default App;
