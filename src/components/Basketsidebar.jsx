import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";

import styles from "./Basketsidebar.module.css";
import { useDispatch } from "react-redux";
import { checkeOut } from "../features/cart/cart";

function Basketsidebar({ state }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>Total:</p> <span>{state.total} $</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity:</p> <span>{state.counteItems}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p> Status:</p> <span>{!state.checkeOut && "pending ..."}</span>
      </div>

      <button onClick={() => dispatch(checkeOut())}>Check Out</button>
    </div>
  );
}

export default Basketsidebar;
