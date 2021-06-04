import { useState } from "react";
import "./square.scss";

function Square() {
  const [color, setColor] = useState("squareBlue");
  return (
    <div
      className={`${color} size`}
      onClick={() => {
        if (color === "squareBlue") {
          setColor("squareRed");
        } else {
          setColor("squareBlue");
        }
      }}
    ></div>
  );
}

export { Square };
