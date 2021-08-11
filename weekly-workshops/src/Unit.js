import { useState } from 'react'

const Unit = ({ unit }) => {

    const [title, setTitle] = useState(unit.title)

    return (
        <div className="unit">
            <li> {unit.code} {title} {unit.offering} </li>
            {/* <button onClick={() => setTitle(title.toUpperCase())}> Up </button>
            <button onClick={() => setTitle(title.toLowerCase())}> Down </button> */}
        </div>
    )
}

export default Unit;