import "./App.css";
import { SimpleWeb } from "./SimpleWeb";
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  return (
    <SimpleWeb
      onChange={(evt) => setValue(evt.currentTarget.value)}
      value={value}
    />
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
