import React from "react";
import ProductItem from "./ProductItem";
import useSWR from "swr";

const ProductList = () => {
  return (
    <div className="product-list grid grid-cols-4 gap-5">
      <ProductItem></ProductItem>
    </div>
  );
};

export default ProductList;
