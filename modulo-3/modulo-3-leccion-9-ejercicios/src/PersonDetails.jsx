import { useParams } from "react-router-dom";

function PersonDetails({ data }) {
  let { id } = useParams();
  let specificPerson = data.find((user) => user.id.value === id);
  if (specificPerson) {
    return (
      <div>
        <img src={specificPerson.picture.thumbnail} alt="user" />
        <p>{specificPerson.name.first}</p>
        <p>{specificPerson.name.las}</p>
        <p>{specificPerson.gender}</p>
        <p>{specificPerson.location.country}</p>
        <p>{specificPerson.dob.age}</p>
      </div>
    );
  } else {
    return <p>Usuraria no encontrada</p>;
  }
}

export { PersonDetails };
