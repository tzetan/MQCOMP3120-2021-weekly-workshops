import React, { useEffect, useState } from 'react';
// import './App.css';
// import Unit from './Unit'
import UnitList from './UnitList'
import Form from './Form';
import axios from 'axios';


function App() {

  const [units, setUnits] = useState([])


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

  useEffect(() => {
    axios.get("http://localhost:3001/units")
      .then(response => {
        console.log("we have a response", response)
        setUnits(response.data)
      })
  },
  [])

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
