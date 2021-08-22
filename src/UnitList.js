import React from "react";

const UnitList = ({ unit, handleDelete }) => {

    // const handleDelete = () => {

    // }
    //asdasd

    return (
        <div>
            <ul>
                <li> {unit.code} {unit.title} {unit.offering} </li>
                <button onClick = {() => handleDelete(unit)}> Delete </button>
                {/* <button onClick = {() => handleDelete(unit)}> Edit </button> */}
                
                {/* {unit.map(unit => <li key={unit.id}> {unit.code} {unit.title} {unit.offering} <button onClick = {() => handleDelete(unit)}> Delete </button> </li> )}  */}
                
            </ul>
        </div>
    )
}

export default UnitList;