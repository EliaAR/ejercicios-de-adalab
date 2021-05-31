import { render } from "@testing-library/react";
import "./App.scss";

function App() {
  return (
    <div className="target">
      <section>
        <h1>Álex Gerrero</h1>
        <h2>Lunes 21 de mayo de 2021</h2>
      </section>
      <section>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          tempora, hic quo distinctio, illo inventore voluptates non, delectus
          perferendis nobis consectetur atque voluptatum earum quaerat! Rerum
          sequi magni molestiae non.
        </p>
      </section>
      <section>
        <p>Leer más..</p>
      </section>
    </div>
  );
}

export default App;
