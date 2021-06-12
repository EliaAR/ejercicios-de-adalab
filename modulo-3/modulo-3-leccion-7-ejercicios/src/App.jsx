import "./App.scss";
import { Form } from "./form";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [textarea, setTextarea] = useState("");
  const [select, setSelect] = useState("Español");
  const [radio, setRadio] = useState("todos los públicos");
  const [checkboxes, setCheckboxes] = useState(["Comedia"]);

  return (
    <div className="App">
      <Form
        text={text}
        onChangeText={(evt) => setText(evt.currentTarget.value)}
        textarea={textarea}
        onChangeTextarea={(evt) => setTextarea(evt.currentTarget.value)}
        select={select}
        onChangeSelect={(evt) => setSelect(evt.currentTarget.value)}
        radio={radio}
        onChangeRadio={(evt) => setRadio(evt.target.value)}
        checkboxes={checkboxes}
        onChangeCheckboxes={(evt) => {
          if (evt.target.checked) {
            setCheckboxes([...checkboxes, evt.target.value]);
          } else {
            setCheckboxes(
              checkboxes.filter((item) => evt.target.value !== item)
            );
          }
        }}
        onReset={() => {
          setText("");
          setTextarea("");
          setSelect("");
          setRadio("");
          setCheckboxes([]);
        }}
      />
    </div>
  );
}

export default App;

// const defaultState = {
//   name: "",
//   descrption: "",
//   language: "Español",
//   public: "Todos los públicos",
//   genre: "Comedia",
// };

// function App() {
//   const [state, setState] = useState(defaultState);

//     const onChange = (event) => {
//       const name = event.target.name;
//       setState({
//         [name]: event.taget.value,
//       });
//     };
// return (
//     <div className="App">
//       <Form
//         state={state} onChange= {onChange}
//         onReset={() => {
//           setText("");
//           setTextarea("");
//           setSelect("");
//           setRadio("");
//           setCheckboxes([]);
//         }}
//       />
//     </div>
//   );
// }
