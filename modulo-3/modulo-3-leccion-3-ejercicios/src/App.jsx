import "./App.css";
import { StudentsList } from "./components/StudentsList";

const students = [
  {
    promo: "A",
    name: "Sofía",
    age: 20,
  },
  {
    promo: "B",
    name: "María",
    age: 21,
  },
  {
    promo: "A",
    name: "Lucía",
    age: 22,
  },
];

function App() {
  return (
    <div className="App">
      <StudentsList students={students} />
    </div>
  );
}

export { App };
