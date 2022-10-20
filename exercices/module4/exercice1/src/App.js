import { useState , useEffect } from 'react'
import axios from 'axios'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , number:'0484000000'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  
  useEffect(hook, [])

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    persons.forEach(function (person){
      if (person.name===newName) {
        console.log("im here");
        window.alert(`${newName} is already added to phonebook`)
      } else {
        setPersons(persons.concat(personObject))
      setNewName('')
      }
    });

    }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>number:
           <input 
            value={newNumber}
            onChange={handleNumberChange}
           />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person=>
          <l>{person.name} {person.number}<br></br></l>
        )}
      </ul>
    </div>
  )
}

export default App