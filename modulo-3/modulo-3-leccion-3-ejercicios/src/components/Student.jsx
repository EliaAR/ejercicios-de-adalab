function Student(props) {
  return (
    <li>
      {props.name} - {props.description}
    </li>
  );
}

Student.defaultProps = {
  description: "No hay descripcion",
};

export { Student };
