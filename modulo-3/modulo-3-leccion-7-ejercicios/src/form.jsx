import { useState } from "react";
import "./form.scss";

function Form() {
  const [text, setText] = useState("");
  const [textarea, setTextarea] = useState("");
  const [select, setSelect] = useState("Español");
  const [radio, setRadio] = useState("todos los públicos");
  const [checkbox, setCheckbox] = useState("comedia");
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
        <fieldset
          className="for__input"
          value={radio}
          onchange={(evt) => setRadio(evt.currentTarget.value)}
        >
          <label htmlFor="todos">Todos los públicos</label>
          <input type="radio" value="todos los públicos" id="todos" />
          <label htmlFor="12">12 años</label>
          <input type="radio" value="12" id="12" />
          <label htmlFor="18">Mayor de edad</label>
          <input type="radio" value="18" id="18" />
        </fieldset>
        <fieldset
          value={checkbox}
          onchange={(evt) => setCheckbox(evt.currentTarget.value)}
        >
          <label htmlFor="comedia">Comedia</label>
          <input type="checkbox" id="comedia" />
          <label htmlFor="fantasía">Fantasía</label>
          <input type="checkbox" id="fantasía" />
          <label htmlFor="terror">Terror</label>
          <input type="checkbox" id="terror" />
        </fieldset>
      </form>
      <p>{text}</p>
      <p>{textarea}</p>
      <p>{select}</p>
      <p>{radio}</p>
      <p>{checkbox}</p>
    </>
  );
}

export { Form };
