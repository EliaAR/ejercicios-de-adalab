import "./App.scss";
import { SimpleWeb } from "./SimpleWeb";
import { Square } from "./Square";
import { SheepCounter } from "./SheepCounter";
import { Birthday } from "./Birthday";
import React, { useState } from "react";

const data = {
  firstName: "Ada",
  lastName: "Lovelace",
  birthDate: {
    day: 10,
    month: "diciembre",
    year: 1815,
  },
};

function App() {
  const [value, setValue] = useState("");
  const [color, setColor] = useState("squareBlue");
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
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
      <Birthday
        name={name}
        onChangename={(evt) => setName(evt.currentTarget.value)}
        lastName={lastName}
        onChangeLastname={(evt) => setLastName(evt.currentTarget.value)}
        day={day}
        onChangeDay={(evt) => setDay(evt.currentTarget.value)}
        month={month}
        onChangeMonth={(evt) => setMonth(evt.currentTarget.value)}
        year={year}
        onChangeYear={(evt) => setYear(evt.currentTarget.value)}
      />
    </>
  );
}
   if (evt.target.checked) {
                  setCity([...city, evt.target.value]);
                } else {
                  setCity(city.filter((item) => evt.target.value !== item));

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
