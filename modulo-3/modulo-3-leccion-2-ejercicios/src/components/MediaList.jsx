import { MediaCard } from "./mediaCard";

function MediaList() {
  return (
    <div>
      <h1>Título</h1>
      <ul>
        <li>
          <MediaCard
            names="Pepita"
            date="Lunes 31 de mayo de 2021"
            paragraph="to correct"
          />
        </li>
        <li>
          <MediaCard
            names="Juanita"
            date="Martes 1 de junio de 2021"
            paragraph="to correct"
          />
        </li>
        <li>
          <MediaCard
            names="Jaimita"
            date="Martes 1 de junio de 2021"
            paragraph="to correct"
          />
        </li>
      </ul>
    </div>
  );
}

export { MediaList };
