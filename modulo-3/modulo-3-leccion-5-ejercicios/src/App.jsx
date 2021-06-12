import "./App.scss";
import { SimpleWeb } from "./SimpleWeb";
import { Square } from "./Square";
import { SheepCounter } from "./SheepCounter";
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [color, setColor] = useState("squareBlue");
  const [count, setCount] = useState(0);
  return (
    <>
      <SimpleWeb
        onChange={(evt) => setValue(evt.currentTarget.value)}
        value={value}
      />
      <Square
        color={color}
        onClickColor={() => {
          if (color === "squareBlue") {
            setColor("squareRed");
          } else {
            setColor("squareBlue");
          }
        }}
      />
      <SheepCounter count={count} onClickCount={() => setCount(count + 1)} />
    </>
  );
}

// class App2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       simpleWebValue: "",
//       square: "",
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(evt) {
//     this.setState({
//       ...this.state,
//       simpleWebValue: evt.currentTarget.value,
//     });
//   }
//   render() {
//     return (
//       <SimpleWeb
//         value={this.state.simpleWebValue}
//         onChange={this.handleChange}
//       />
//     );
//   }
// }

export { App };
