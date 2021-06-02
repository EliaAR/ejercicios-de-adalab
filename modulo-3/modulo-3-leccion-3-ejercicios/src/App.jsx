import "./App.scss";
import { StudentsList } from "./StudentsList";
import { HalfPage } from "./Halfpage";

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
    <>
      <div className="App">
        <StudentsList students={students} />
      </div>
      <div>
        <HalfPage>
          <section className="section__Container">
            <h1>Título</h1>
            <p>Estoy en la izquierda</p>
          </section>
          <section className="section__Container">
            <h2>Título 2</h2>
            <p>Estoy en la derecha</p>
          </section>
        </HalfPage>
      </div>
    </>
  );
}

export { App };
