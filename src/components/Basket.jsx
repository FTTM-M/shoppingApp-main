import { MdDeleteOutline } from "react-icons/md";
import { Title } from "./helper/helper";

import styles from "../components/Basket.module.css";
import { useDispatch } from "react-redux";
import { decreaseItem, deleteItem, increaseItem } from "../features/cart/cart";

function Basket({ product }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} />
      <p>{Title(product.title)}</p>
      <div className={styles.actions}>
        {product.quantity === 1 && (
          <button onClick={() => dispatch(deleteItem(product))}>
            <MdDeleteOutline />
          </button>
        )}
        {product.quantity > 1 && (
          <button onClick={() => dispatch(decreaseItem(product))}>-</button>
        )}
        <span>{product.quantity}</span>
        <button onClick={() => dispatch(increaseItem(product))}>+</button>
      </div>
    </div>
  );
}

export default Basket;
