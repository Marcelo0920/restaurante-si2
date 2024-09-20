import React from "react";
import Dashboard from "../components/dashboard/Dashboard";
import ProductsHome from "../components/products/ProductsHome";
import ProductItem from "../components/products/ProductItem";

const Home = () => {
  console.log("hola mundo");

  return (
    <div className="sections-wrapper">
      <Dashboard />
      <ProductsHome />
    </div>
  );
};

export default Home;
