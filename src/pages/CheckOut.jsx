import Basket from "../components/Basket";
import Basketsidebar from "../components/Basketsidebar";
import { useCard } from "../context/CardContext";

import styles from "./CheckOut.module.css"

function CheckOut() {
  const [state, dispatch] = useCard();
  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
  };

  console.log(state);

  if (!state.counter) {
    return <div>Empty</div>;
  }

  return (
    <div className={styles.container}>
      <Basketsidebar state={state} clickHandler={clickHandler} />
      <div  className={styles.products}>
        {state.selectedItems.map((product) => (
          <Basket
            key={product.id}
            product={product}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckOut;
