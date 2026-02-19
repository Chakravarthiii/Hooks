import React from "react";
import { useState } from "react";
import ProductItem from "./ProductItem";

const Shop = () => {
  let [product, setproduct] = useState({
    name: "iphone 17 pro",
    price: 130000,  
    description: "prores capability",
  });

  return (
    <div>
      <h1>welcome to shop</h1>
      <ProductItem product={product} />
    </div>
  );
};

export default Shop;
