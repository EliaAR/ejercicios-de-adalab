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
Student.propTypes = {
  name: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
};

export { Student };
