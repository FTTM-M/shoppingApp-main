import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
// import { useCard } from "../context/CardContext";

import styles from "./Layout.module.css";
import { useSelector } from "react-redux";

function Layout({ children }) {
  // const [state] = useCard();
  const state = useSelector((store) => store.carts);
  return (
    <>
      <header className={styles.header}>
        <Link style={{ color: "white" }} to="/products">
          Shopping
        </Link>
        <div>
          <Link to="/chackOut">
            <PiShoppingCartSimpleBold />
            {!!state.counteItems && <span>{state.counteItems}</span>}
          </Link>
        </div>
      </header>
      {children}
      <footer className={styles.footer}>
        Developed By{" "}
        <a href="https://github.com/FTTM-M/shoppingApp-main">FTTM</a>
      </footer>
    </>
  );
}

export default Layout;
