import { Person } from "@/Models/Person"
import { ChangeEvent, FormEvent, useState } from "react"

type AddPersonFormProps ={
  submitCharacter: (person: Person) => void
}

export default function AddPersonForm(props:AddPersonFormProps) {
  const emptyPerson: Person = {
    "personId": 0,
    "firstName": "",
    "lastName": "",
    "age": 0
  }
  const [person, setPerson] = useState<Person>(emptyPerson)

  function handleFormChange(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value
    const nameOfInput = event.target.name
    setPerson((prevState) => ({ ...prevState, [nameOfInput]: inputValue }))
}
function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
  props.submitCharacter(person)

  setPerson(emptyPerson)
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> First name:
          <input type="text" name="firstName" value={person.firstName} onChange={handleFormChange} />
        </label>

        <label> Last name:
          <input type="text" name="lastName" value={person.lastName} onChange={handleFormChange} />
        </label>

        <label> Age:
          <input type="text" name="age" value={person.age} onChange={handleFormChange} />
        </label>
<button>ADD</button>
      </form>

    </div>
  )
}