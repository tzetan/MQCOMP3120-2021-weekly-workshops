import Unit from './Unit'

const UnitList = ({ content }) => {

    return (
        <div>
            {content.map(unit => <Unit key={unit.code} unit={unit} />)}
        </div>
    )
}

export default UnitList;