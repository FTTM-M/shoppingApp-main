import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { quantityHandler, Title } from "./helper/helper";
import { useCard } from "../context/CardContext";
import styles from "./ProductCards.module.css";

function ProductCards({ data }) {
  const { title, image, id, price } = data;

  const [state, dispatch] = useCard();

  const quantity = quantityHandler(state, id);
  // console.log(state);

  const clickHandler = (type) => {
    dispatch({ type, payload: data });
    // console.log(state);
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{Title(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          {" "}
          <TbListDetails />
        </Link>
        <div>
          {quantity === 1 && (
            <button onClick={() => clickHandler("REMOVE_ITEMS")}>
              <MdDeleteOutline />
            </button>
          )}

          {quantity > 1 && (
            <button onClick={() => clickHandler("DECREASE")}>-</button>
          )}
          {!!quantity && <span>{quantity}</span>}
          {quantity == 0 ? (
            <button onClick={() => clickHandler("ADD_ITEMS")}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button onClick={() => clickHandler("INCREASE")}>+</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
