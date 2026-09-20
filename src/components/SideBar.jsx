import { FaListUl } from "react-icons/fa";
import { createQuery } from "./helper/helper";
import styles from "./SideBar.module.css";

function SideBar({query, setQuery }) {
  const CategoriesHandler = (event) => {
    const { tagName } = event.target;

    const category = event.target.innerText.toLowerCase();

    if (tagName !== "LI") return;

    setQuery((query) => createQuery(query, { category }));
  };

  const category = [
    { id: 1, type: "All" },
    { id: 2, type: "Electronics" },
    { id: 3, type: "jewelery" },
    { id: 4, type: "Men's Clothing" },
    { id: 5, type: "Women's Clothing" },
  ];

  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={CategoriesHandler}>
        {category.map((item) => (
          <li key={category.id} className={item.type.toLowerCase() === query.category ? styles.selected : null}>
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
