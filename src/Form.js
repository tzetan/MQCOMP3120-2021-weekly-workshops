import React, { useState } from 'react';
import './App.css';

const Form = ({ updateFn }) => {

    const offerings = ['S1', 'S2', 'S3']

    const [newUnitCode, setNewUnitCode] = useState('')
    const [newUnitTitle, setNewUnitTitle] = useState('')
    const [newUnitOfferings, setNewUnitOfferings] = useState([])
    const [checkbox, setCheckbox] = useState(new Array(offerings.length).fill(false))

    const formHandller = (event) => {
        event.preventDefault()

        updateFn({ newUnitCode, newUnitTitle, newUnitOfferings })
        setNewUnitCode('')
        setNewUnitTitle('')
        setNewUnitOfferings('')
        setCheckbox(checkbox.map((item) => item === true ? false : false))
    }

    // const handleInputChange = (event) => {
    //     const target = event.target
    //     const value = target.type === 'checkbox' ? target.checked : target.value
    //     const name = event.name


    // }
    
    const handleOfferingChange = ({key, offering}) => {
        // setCheckbox(event.target.checked)
        const updateCheckbox = checkbox.map((item, index) => 
            index === key ? !item : item
        )

        setCheckbox(updateCheckbox)
        setNewUnitOfferings(newUnitOfferings.concat(offering.target.value))
    }

    return (
        <form className="form" onSubmit={formHandller}>
            <div className="row">
                <div className="five columns">
                    <label>
                        Unit Code:
                        <input id="exampleEmailInput"
                            value={newUnitCode}
                            onChange={(inputText) => setNewUnitCode(inputText.target.value)}
                        />
                    </label>
                </div>

                <div className="seven columns">
                    <label>
                        Unit Title:
                        <input
                            value={newUnitTitle}
                            onChange={(inputText) => setNewUnitTitle(inputText.target.value)}
                        />
                    </label>
                </div>
            </div>

            <label> Unit Offerings: </label>
            {offerings.map((offering, key) =>
                <label key={key}>
                    {offering}
                    <input className="u-full-width"
                        value={offering}
                        checked={checkbox[key]}
                        // onChange={(offering) => setNewUnitOfferings(newUnitOfferings.concat(offering.target.value))}
                        onChange={(offering) => handleOfferingChange({key, offering})}
                        type="checkbox"
                    />
                </label>
            )}

            <button className="button-primary" type="submit"> Add </button>
        </form>
    )
}

export default Form;