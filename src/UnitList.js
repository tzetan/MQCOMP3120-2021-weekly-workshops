import React from "react";

const UnitList = ({ units, handleDelete }) => {

    // const handleDelete = () => {

    // }
    //asdasd

    return (
        <div>
            <ul>
                
                
                {/* <button onClick = {() => handleDelete(unit)}> Edit </button> */}
                
                {/* {unit.map(unit => <li key={unit.id}> {unit.code} {unit.title} {unit.offering} <button onClick = {() => handleDelete(unit)}> Delete </button> </li> )}  */}
                {units.map((unit) => 
                    <li key={unit.id}>  
                        {unit.code} {unit.title} {unit.offering}
                        <button onClick = {() => handleDelete(unit)}> Delete </button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default UnitList;