import AddPersonForm from "@/Component/AddPersonForm";
import { Person } from "@/Models/Person";

export default function AddPerson() {

  function addPerson(person:Person){
    return fetch('https://localhost:7123/api/Person', { method: "POST", headers: {Accept: 'application/json','Content-Type': 'application/json'},mode: "cors", body: JSON.stringify(person) })
    .then(response => response.json())
  }
    return (
      <AddPersonForm submitCharacter ={addPerson} />
    )
  }