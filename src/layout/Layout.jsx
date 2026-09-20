import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useCard } from "../context/CardContext";

import styles from "./Layout.module.css"

function Layout({ children }) {
  const [state] = useCard();
  return (
    <>
      <header className={styles.header }>
        <Link style={{color:"white"}  }to="/products">Shopping</Link>
        <div>
          <Link to="/chackOut">
            <PiShoppingCartSimpleBold />
            {!!state.counter && <span>{state.counter}</span>}
          </Link>
        </div>
      </header>
      {children}
      <footer className={styles.footer}>
        Developed By <a href="https://github.com/FTTM-M/shoppingApp">FTTM</a>
      </footer>
    </>
  );
}

export default Layout;
