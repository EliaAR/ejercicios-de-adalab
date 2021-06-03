function SimpleWeb({ value, onChange }) {
  return (
    <>
      <input
        type="text"
        onChange={onChange} // Para componente class
        value={value}
      />
      <p>{value}</p>
    </>
  );
}

export { SimpleWeb };
