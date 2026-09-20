import { MdDeleteOutline } from "react-icons/md";
import { Title } from "./helper/helper";

import styles from "../components/Basket.module.css";

function Basket({ product, clickHandler }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} />
      <p>{Title(product.title)}</p>
      <div className={styles.actions}>
        {product.quantity === 1 && (
          <button onClick={() => clickHandler("REMOVE_ITEMS", product)}>
            <MdDeleteOutline />
          </button>
        )}
        {product.quantity > 1 && (
          <button onClick={() => clickHandler("DECREASE", product)}>-</button>
        )}
        <span>{product.quantity}</span>
        <button onClick={() => clickHandler("INCREASE", product)}>+</button>
      </div>
    </div>
  );
}

export default Basket;
