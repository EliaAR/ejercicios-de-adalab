function StudentsList(props) {
  let listPeople = props.students
    .filter((student) => student.promo === "A")
    .map((student, index) => <li key={index}>{student.name}</li>);
  return <ul>{listPeople}</ul>;
}

export { StudentsList };
