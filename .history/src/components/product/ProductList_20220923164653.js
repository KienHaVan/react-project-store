import React from "react";
import ProductItem from "./ProductItem";
import useSWR from "swr";
import { fetcher } from "../../config";

const ProductList = () => {
  const { data } = useSWR("https://fakestoreapi.com/products", fetcher);
  if (!data) return null;
  return (
    <div className="product-list grid grid-cols-4 gap-5">
      {data.length > 0 &&
        data.map((item) => (
          <ProductItem key={item.id} data={item}></ProductItem>
        ))}
    </div>
  );
};

export default ProductList;
