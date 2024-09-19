import React from "react";

import plato from "../../assets/plato1.jpg";
import "../../styles/products/productitem.css";

const ProductItem = () => {
  return (
    <div className="product-item">
      <img src={plato} />
      <h4>Nombre Producto</h4>
      <p>Bs 54.00</p>
    </div>
  );
};

export default ProductItem;
