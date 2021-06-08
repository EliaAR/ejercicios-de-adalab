import { useState } from "react";
import "./form.scss";

function Form() {
  const [text, setText] = useState("");
  const [textarea, setTextarea] = useState("");
  const [select, setSelect] = useState("Español");
  return (
    <>
      <form className="form">
        <input
          className="form__input"
          type="text"
          value={text}
          onChange={(evt) => setText(evt.currentTarget.value)}
        />
        <textarea
          className="form__input"
          value={textarea}
          onChange={(evt) => setTextarea(evt.currentTarget.value)}
        ></textarea>
        <select
          className="form__input"
          value={select}
          onchange={(evt) => setSelect(evt.currentTarget.value)}
        >
          <option value="Español">Español</option>
          <option value="Inglés">Inglés</option>
          <option value="Portugués">Portugués</option>
        </select>
      </form>
      <p>{text}</p>
      <p>{textarea}</p>
      <p>{select}</p>
    </>
  );
}

export { Form };
