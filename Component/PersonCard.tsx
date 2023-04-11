import { Person } from "@/Models/Person"

type PersonCardProps = {
  person:Person,
}

export default function PersonCard(props: PersonCardProps) {


    return (
      <div>
        PersonId: {props.person.personId}
        FirstName: {props.person.firstName}
        LastName:{props.person.lastName}
        Age: {props.person.age}
      </div>
    )
  }