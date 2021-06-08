import "./form.scss";

function Form({
  text,
  textarea,
  select,
  radio,
  checkboxes,
  setText,
  setTextarea,
  setSelect,
  setRadio,
  setCheckboxes,
}) {
  return (
    <>
      <form className="form">
        <input
          className="form__input"
          name="name"
          type="text"
          value={text}
          onChange={(evt) => setText(evt.currentTarget.value)}
        />

        <textarea
          className="form__input"
          name="description"
          value={textarea}
          onChange={(evt) => setTextarea(evt.currentTarget.value)}
        ></textarea>

        <select
          className="form__input"
          name="language"
          value={select}
          onChange={(evt) => setSelect(evt.currentTarget.value)}
        >
          <option value="Español">Español</option>
          <option value="Inglés">Inglés</option>
          <option value="Portugués">Portugués</option>
        </select>

        <fieldset
          className="for__input"
          onChange={(evt) => setRadio(evt.target.value)}
        >
          <label htmlFor="todos">Todos los públicos</label>
          <input
            type="radio"
            value="todos los públicos"
            id="todos"
            name="public"
          />
          <label htmlFor="12">12 años</label>
          <input type="radio" value="12" id="12" name="public" />
          <label htmlFor="18">Mayor de edad</label>
          <input type="radio" value="18" id="18" name="public" />
        </fieldset>

        <fieldset>
          <label htmlFor="comedia">Comedia</label>
          <input
            type="checkbox"
            id="comedia"
            name="gender"
            value="Comedia"
            checked={checkboxes.includes("Comedia")}
            onChange={(evt) => {
              if (evt.target.checked) {
                setCheckboxes([...checkboxes, evt.target.value]);
              } else {
                setCheckboxes(
                  checkboxes.filter((item) => evt.target.value !== item)
                );
              }
            }}
          />
          <label htmlFor="fantasía">Fantasía</label>
          <input
            type="checkbox"
            id="fantasía"
            name="gender"
            value="Fantasía"
            checked={checkboxes.includes("Fantasía")}
            onChange={(evt) => {
              if (evt.target.checked) {
                setCheckboxes([...checkboxes, evt.target.value]);
              } else {
                setCheckboxes(
                  checkboxes.filter((item) => evt.target.value !== item)
                );
              }
            }}
          />
          <label htmlFor="suspense">Suspense</label>
          <input
            type="checkbox"
            id="suspense"
            name="gender"
            value="Suspense"
            checked={checkboxes.includes("Suspense")}
            onChange={(evt) => {
              if (evt.target.checked) {
                setCheckboxes([...checkboxes, evt.target.value]);
              } else {
                setCheckboxes(
                  checkboxes.filter((item) => evt.target.value !== item)
                );
              }
            }}
          />
        </fieldset>

        <fieldset>
          <input type="file" id="" />
        </fieldset>
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
