import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home({ data, setData }) {
  useEffect(() => {
    const ENDPOINT = "https://randomuser.me/api/?results=50";
    fetch(ENDPOINT)
      .then((response) => response.json())
      .then((response) => {
        let arrayPerson = response.results;
        setData(arrayPerson);
      });
  }, [setData]);

  return (
    <div className="App">
      <ul>
        {data.map((user) => (
          <Link to={`/persondetails/${user.id.value}`} key={user.id.value}>
            <li>
              {user.name.first} {user.name.last}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export { Home };
