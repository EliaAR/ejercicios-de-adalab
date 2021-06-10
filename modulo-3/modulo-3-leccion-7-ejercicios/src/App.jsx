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
        setCheckboxes={setCheckboxes}
      />
    </div>
  );
}

export default App;
