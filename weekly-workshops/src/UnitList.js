import Unit from './Unit'

const UnitList = ({ content }) => {

    return (
        <div>
            <ul>
                {content.map(unit => <Unit key={unit.code} unit={unit} />)}
            </ul>
        </div>
    )
}

export default UnitList;