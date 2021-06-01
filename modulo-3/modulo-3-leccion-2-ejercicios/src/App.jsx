import "./App.css";
import { MediaList } from "./components/MediaList";
import { CatList } from "./components/CatList";

function App() {
  return (
    <>
      <div>
        <MediaList />
      </div>
      <div>
        <CatList />
      </div>
    </>
  );
}

export { App };
