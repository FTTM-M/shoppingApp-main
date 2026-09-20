import { useProducts } from "../context/ProductContext";
import ProductCards from "../components/ProductCards";
import styles from "./Product.module.css";
import Loading from "../components/Loading";
import {

  filteredProducts,
  initialDatas,
  SearchedProducts,
} from "../components/helper/helper";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import SideBar from "../components/SideBar";

function Products() {
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const products = useProducts();
  // console.log(products);

  useEffect(() => {
    setDisplay(products);
    setSearch(query.search || "");
    setQuery(initialDatas(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    // console.log(products);
    // console.log(search, query.category);
    let finalProducts = SearchedProducts(products, query.search);
    setDisplay(filteredProducts(finalProducts, query.category));
  }, [query]);

 


  return (
    <>
     <SearchBox  search={search} setSearch={setSearch} setQuery={setQuery}/>
      <div className={styles.container}>
        <div className={styles.product}>
          {!display.length && <Loading />}
          {display.map((product) => (
            <ProductCards key={product.id} data={product} />
          ))}
        </div>
        <SideBar query={query} setQuery={setQuery} />
      </div>
    </>
  );
}

export default Products;
