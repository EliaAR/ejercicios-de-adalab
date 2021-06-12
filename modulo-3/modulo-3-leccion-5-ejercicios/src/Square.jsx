import "./square.scss";

function Square({ color, onClickColor }) {
  return <div className={`${color} size`} onClick={onClickColor}></div>;
}

export { Square };
