function SheepCounter({ count, onClickCount }) {
  return (
    <>
      <p>Número de ovejitas: {count}</p>
      <button onClick={onClickCount}> Contador de ovejitas</button>
    </>
  );
}

export { SheepCounter };
