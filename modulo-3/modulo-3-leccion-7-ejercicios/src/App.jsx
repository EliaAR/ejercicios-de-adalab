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
        setText={setText}
        textarea={textarea}
        setTextarea={setTextarea}
        select={select}
        setSelect={setSelect}
        radio={radio}
        setRadio={setRadio}
        checkboxes={checkboxes}
        setCheckboxes={setCheckboxes}
      />
    </div>
  );
}

export default App;
