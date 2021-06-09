import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [city, setCity] = useState([]);
  const [genderList, setGenderList] = useState([]);
  useEffect(() => {
    const ENDPOINT = "https://randomuser.me/api/?results=50";
    fetch(ENDPOINT)
      .then((response) => response.json())
      .then((response) => {
        let arrayPerson = response.results;
        setData(arrayPerson);
        console.log(arrayPerson);
      });
  }, []);

  return (
    <div className="App">
      <ul>
        {data
          .filter((user) => {
            if (city.length === 0) {
              return true;
            } else {
              return city.includes(user.location.city);
            }
          })
          .filter((user) => {
            if (genderList.length === 0) {
              return true;
            } else {
              return genderList.includes(user.gender);
            }
          })
          .map((user) => (
            <li>
              <img src={user.picture.thumbnail} />
              {user.name.first} {user.name.last} {user.location.city}{" "}
              {user.dob.age}
            </li>
          ))}
      </ul>
      <ul>
        {data.map((user) => (
          <li>
            <label htmlFor={user.location.city}>{user.location.city}</label>
            <input
              type="checkbox"
              id={user.location.city}
              name="city"
              value={user.location.city}
              checked={city.includes(user.location.city)}
              onChange={(evt) => {
                if (evt.target.checked) {
                  setCity([...city, evt.target.value]);
                } else {
                  setCity(city.filter((item) => evt.target.value !== item));
                }
              }}
            />
          </li>
        ))}
      </ul>
      <ul>
        {data
          .map((user) => user.gender)
          // map → convierte el array de objeto en un array de cadena de texto (female o male)
          .filter((item, index, array) => {
            return array.indexOf(item) === index;
          })
          // filter → indexOf buca el índice del primer elemento que encuentre que sea item. Devuelve true o false para cada elemtno que aparezca por primera vez. El tercer paŕametro es el array en sía sobre el que se está filtrando
          .map((gender) => (
            <li>
              <label htmlFor={gender}>{gender}</label>
              <input
                type="checkbox"
                id={gender}
                name="gender"
                value={gender}
                checked={genderList.includes(gender)}
                onChange={(evt) => {
                  if (evt.target.checked) {
                    setGenderList([...genderList, evt.target.value]);
                    console.log(genderList);
                  } else {
                    setGenderList(
                      genderList.filter((item) => evt.target.value !== item)
                    );
                    console.log(genderList);
                  }
                }}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}

export { App };
