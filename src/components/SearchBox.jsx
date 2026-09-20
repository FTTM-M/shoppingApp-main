import { ImSearch } from "react-icons/im";
import { createQuery } from "./helper/helper";
import styles from "./SearchBox.module.css"


function SearchBox({ search, setSearch, setQuery }) {
  const ButtonHandler = () => {
    setQuery((query) => createQuery(query, { search }));
  };
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLocaleLowerCase().trim())}
      />
      <button onClick={ButtonHandler}>
        <ImSearch />
      </button>
    </div>
  );
}

export default SearchBox;
