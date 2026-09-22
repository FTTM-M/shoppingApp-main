// import { useProducts } from "../context/ProductContext";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ProductCards from "../components/ProductCards";
import styles from "./Product.module.css";
import Loading from "../components/Loading";
import {
  filteredProducts,
  initialDatas,
  SearchedProducts,
} from "../components/helper/helper";
import SearchBox from "../components/SearchBox";
import SideBar from "../components/SideBar";
import {fetchProduct} from "../features/products/product";

function Products() {
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  // const products = useProducts();
  const dispatch = useDispatch();
  const {products,loading} = useSelector((state) => state.products);
  console.log(products);

useEffect(() => {
    setDisplay(products);
    setSearch(query.search || "");
    setQuery(initialDatas(searchParams));
  }, [products]);


  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  
  useEffect(() => {
    setSearchParams(query);
    // console.log(products);
    // console.log(search, query.category);
    let finalProducts = SearchedProducts(products, query.search);
    setDisplay(filteredProducts(finalProducts, query.category));
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.product}>
          {loading && <Loading />}
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
