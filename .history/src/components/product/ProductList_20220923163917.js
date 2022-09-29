import React from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <div className="product-list grid grid-cols-4 gap-5">
      <ProductItem></ProductItem>
    </div>
  );
};

export default ProductList;
