import { useState } from 'react'

const Form = ({ updateFn }) => {

    const offerings = ['S1', 'S2', 'S3']

    const [newUnitCode, setNewUnitCode] = useState('')
    const [newUnitTitle, setNewUnitTitle] = useState('')
    const [newUnitOfferings, setNewUnitOfferings] = useState([])
    const [checkbox, setCheckbox] = useState(false)

    const formHandller = (event) => {
        event.preventDefault()

        updateFn({ newUnitCode, newUnitTitle, newUnitOfferings })
        setNewUnitCode('')
        setNewUnitTitle('')
        setCheckbox(false)
    }

    return (
        <form onSubmit={formHandller}>
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
        </form>
    )
}

export default Form;