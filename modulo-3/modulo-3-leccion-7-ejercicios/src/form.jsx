import "./form.scss";

function Form({
  text,
  textarea,
  select,
  radio,
  checkboxes,
  onChangeText,
  onChangeTextarea,
  onChangeSelect,
  onChangeRadio,
  onChangeCheckboxes,
  onReset,
}) {
  return (
    <>
      <form className="form" onSubmit={(evt) => evt.preventDeault()}>
        <input
          className="form__input"
          name="name"
          type="text"
          value={text}
          onChange={onChangeText}
        />

        <textarea
          className="form__input"
          name="description"
          value={textarea}
          onChange={onChangeTextarea}
        ></textarea>

        <select
          className="form__input"
          name="language"
          value={select}
          onChange={onChangeSelect}
        >
          <option value="Español">Español</option>
          <option value="Inglés">Inglés</option>
          <option value="Portugués">Portugués</option>
        </select>

        <fieldset className="for__input">
          <label htmlFor="todos">Todos los públicos</label>
          <input
            type="radio"
            value="todos los públicos"
            id="todos"
            name="public"
            checked={radio === "todos los públicos"}
            onChange={onChangeRadio}
          />
          <label htmlFor="12">12 años</label>
          <input
            type="radio"
            value="12"
            id="12"
            name="public"
            checked={radio === "12"}
            onChange={onChangeRadio}
          />
          <label htmlFor="18">Mayor de edad</label>
          <input
            type="radio"
            value="18"
            id="18"
            name="public"
            checked={radio === "18"}
            onChange={onChangeRadio}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="comedia">Comedia</label>
          <input
            type="checkbox"
            id="comedia"
            name="genre"
            value="Comedia"
            checked={checkboxes.includes("Comedia")}
            onChange={onChangeCheckboxes}
          />
          <label htmlFor="fantasía">Fantasía</label>
          <input
            type="checkbox"
            id="fantasía"
            name="genre"
            value="Fantasía"
            checked={checkboxes.includes("Fantasía")}
            onChange={onChangeCheckboxes}
          />
          <label htmlFor="suspense">Suspense</label>
          <input
            type="checkbox"
            id="suspense"
            name="genre"
            value="Suspense"
            checked={checkboxes.includes("Suspense")}
            onChange={onChangeCheckboxes}
          />
        </fieldset>

        <fieldset>
          <input type="file" id="" />
        </fieldset>

        <button onClick={onReset}>Reset</button>
      </form>

      <p>{text}</p>
      <p>{textarea}</p>
      <p>{select}</p>
      <p>{radio}</p>
      <p>{checkboxes.join(", ")}</p>
    </>
  );
}

export { Form };

// function ({state, onChange}){
//   return(
//      <form className="form" onSubmit={(evt) => evt.preventDeault()}>
//         <input
//           className="form__input"
//           name="name"
//           type="text"
//           value={state.name}
//           onChange={onChange}
//         />
//         ...
//   )
// }
