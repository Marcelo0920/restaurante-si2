import React from "react";
import SearchBar from "../searchBar/SearchBar";
import ProductItem from "./ProductItem";

import "../../styles/products/productshome.css";
import Pagination from "../pagination/pagination";

const ProductsHome = () => {
  function handleClick() {
    console.log("ME HAS CLICKEADO");
  }

  return (
    <div className="products-home-container">
      <SearchBar />
      <div className="products-list">
        <ProductItem onClick={handleClick} />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
      <div className="pagination-center">
        <Pagination totalPosts={20} postsPerPage={12} setCurrentPage={1} />
      </div>
    </div>
  );
};

export default ProductsHome;
