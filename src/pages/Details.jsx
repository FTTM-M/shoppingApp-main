import { useParams, Link } from "react-router-dom";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

import { useDetails } from "../context/ProductContext";
import Loading from "../components/Loading";

import styles from "./Details.module.css";

function Details() {
  const { id } = useParams();

  const product = useDetails(+id);

  if (!product) return <Loading />;

  return (
    <div className={styles.container}>
      <img src={product.image} alt={product.title} />
      <div className={styles.informaition}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.category}>
          <SiOpenproject />
          {product.category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {product.price} $
          </span>
          <span>
            <Link to="/products">
              <FaArrowLeft />
              <span>Back to shop</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Details;
