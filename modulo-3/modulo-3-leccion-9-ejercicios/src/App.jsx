import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import { Home } from "./Home";
import { PersonDetails } from "./PersonDetails";

function App() {
  const [data, setData] = useState([]);
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        <Switch>
          <Route
            path="/"
            exact
            children={<Home data={data} setData={setData} />}
          />
          <Route
            path="/persondetails/:id"
            children={<PersonDetails data={data} setData={setData} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export { App };
