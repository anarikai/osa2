import Name from './Name'

const Persons = ({ filteredPersons }) => {
    return (
        <div>
            {filteredPersons.map(person => <Name key={person.name} name={person} />)}
        </div>
    )
}

export default Persons