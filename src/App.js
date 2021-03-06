import React, { useEffect, useState } from 'react';
import './App.css';
// import Unit from './Unit'
import UnitList from './UnitList'
import Form from './Form';
import axiosService from './services/axiosService';
import LoginForm from './LoginForm';


function App() {

  const [units, setUnits] = useState([])
  const [user, setUser] = useState(null)

  const addUnit = ( {newUnitCode, newUnitTitle, newUnitOfferings, items} ) => {
    // event.preventDefault()

    // setUnits([...units, { id: units.length, items: items }])

    const newUnit = {
      code: newUnitCode,
      title: newUnitTitle,
      offering: newUnitOfferings,
    }
    
    // axios.post("http://localhost:3001/units", newUnit)
    axiosService.create(newUnit, user)
      .then(items => {
          console.log("POST response: ", items)

          setUnits([...units, items])

          console.log("new unit added", newUnit)
        }
      )
      .catch((error) => {
        alert("Code or Title is missing")
      })
    // const newUnit = {id: units.length, content: items}

    // setUnits([...units, newUnit])
  }

  const handleDelete = (unit) => {
    
    // setUnits(newUnit)
    axiosService.deleteUnit(unit)
    .then(items => {
        const newUnit = units.filter(item => item.id !== unit.id)
        setUnits(newUnit)
      })
    .catch((error) => {
      alert("There was an error")
    })
  }

  useEffect(() => {
    console.log("effect is running")
    // axios.get("http://localhost:3001/units")
    axiosService.getAll()
      .then(items => {
        console.log("we have a response", items)

        setUnits(items)
      })
    },
  [])

  console.log("rendering the App component")
  // const handleUnitCode 

  return (
    <div className="App">

      <div className="row">
        <div className="u-pull-right">
          <LoginForm user={user} setUser={setUser} />
        </div>
      </div>

      <div className="row">
        <div className="six columns">
          <header className="App-header">
            <h2> COMP3120: Advanced Web Development </h2>
          </header>

          {/* {units.map((unit) => (<UnitList key={unit.id} unit={unit} handleDelete={handleDelete} />))} */}
          <UnitList units={units} handleDelete={handleDelete} />
        </div>

        <div className="form">
          <div className="six columns">
            <Form user={user} addUnit={addUnit} />
          </div>
        </div>
      </div>

      


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
