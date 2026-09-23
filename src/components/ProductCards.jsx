import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { quantityHandler, Title } from "./helper/helper";
//import { useCard } from "../context/CardContext";
import styles from "./ProductCards.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decreaseItem,
  deleteItem,
  increaseItem,
} from "../features/cart/cart";

function ProductCards({ data }) {
  const { title, image, id, price } = data;

  //const [state, dispatch] = useCard();
  //const quantity = quantityHandler(state, id);

  const dispatch = useDispatch();
  const state = useSelector((store) => store.carts);
  // console.log(state);

  const quantity = quantityHandler(state, id);
  // console.log(state);

  // const clickHandler = (type) => {
  //dispatch({ type, payload: data });
  // console.log(state);
  // };

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
            <button onClick={() => dispatch(deleteItem(data))}>
              <MdDeleteOutline />
            </button>
          )}

          {quantity > 1 && (
            <button onClick={() => dispatch(decreaseItem(data))}>-</button>
          )}
          {!!quantity && <span>{quantity}</span>}
          {quantity == 0 ? (
            <button onClick={() => dispatch(addItem(data))}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button onClick={() => dispatch(increaseItem(data))}>+</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
