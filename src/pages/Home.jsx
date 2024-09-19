import React from "react";
import Dashboard from "../components/dashboard/Dashboard";
import ProductsHome from "../components/products/ProductsHome";

const Home = () => {
  return (
    <div className="sections-wrapper">
      <Dashboard />
      <ProductsHome />
    </div>
  );
};

export default Home;
