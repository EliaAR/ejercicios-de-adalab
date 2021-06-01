import { Student } from "./Student";

function StudentsList(props) {
  return (
    <ul>
      {props.students
        .filter((student) => student.promo === "A")
        .map((student, index) => (
          <Student key={index} name={student.name} />
        ))}
    </ul>
  );
}

export { StudentsList };
