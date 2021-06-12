function Birthday(
  name,
  onChangeName,
  lastName,
  onChangeLastName,
  day,
  onChangeDay,
  month,
  onChangeMonth,
  year,
  onChangeYear
) {
  return (
    <fieldset>
      <label htmlFor="name"></label>
      <input
        type="text"
        id="name"
        name="birthday"
        placeholder="Ej: Ada"
        value={name}
        onChange={onChangeName}
      />
      <label htmlFor="lastName"></label>
      <input
        type="text"
        id="lastName"
        name="birthday"
        placeholder=" Ej:Lovelace"
        value={lastName}
        onChange={onChangeLastName}
      />
      <label htmlFor="day"></label>
      <input
        type="text"
        id="day"
        name="birthday"
        placeholder="Ej: 10"
        value={day}
        onChange={onChangeDay}
      />
      <label htmlFor="month"></label>
      <input
        type="text"
        id="month"
        name="birthday"
        placeholder="Ej: diciembre"
        value={month}
        onChange={onChangeMonth}
      />
      <label htmlFor="year"></label>
      <input
        type="text"
        id="year"
        name="birthday"
        placeholder="1815"
        value={year}
        onChange={onChangeYear}
      />
    </fieldset>
  );
}

export { Birthday };
