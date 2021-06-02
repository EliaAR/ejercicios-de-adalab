import { RandomCatDifferent } from "./RandomCat";

// class CatList extends React.Component {
//   render() {
function CatList() {
  return (
    <section className="section-cats">
      <h1>All Cats Are Beautiful</h1>
      <ul className="section-cats_list">
        <li>
          <RandomCatDifferent width="200" height="200" />
        </li>
        <li>
          <RandomCatDifferent width="200" height="400" />
        </li>
        <li>
          <RandomCatDifferent />
        </li>
      </ul>
    </section>
  );
}

export { CatList };
