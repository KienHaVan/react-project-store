import React from "react";
import ProductItem from "./ProductItem";
import useSWR from "swr";
import { fetcher } from "../../config";

const ProductList = () => {
  const { data, error } = useSWR("https://fakestoreapi.com/products", fetcher);
  console.log(data);
  return (
    <div className="product-list grid grid-cols-4 gap-5">
      <ProductItem></ProductItem>
    </div>
  );
};

export default ProductList;
