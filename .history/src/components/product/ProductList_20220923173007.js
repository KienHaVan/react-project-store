import React from "react";
import ProductItem from "./ProductItem";
import useSWR from "swr";
import { fetcher } from "../../config";

const ProductList = () => {
  const { data } = useSWR("https://api.escuelajs.co/api/v1/products", fetcher);
  if (!data) return null;
  console.log(data);
  return (
    <>
      <h2 className="mb-5 font-semibold text-2xl p-4 bg-primary text-white inline-block rounded-xl">
        Tất cả sản phẩm
      </h2>
      <div className="product-list grid grid-cols-4 gap-5">
        {data.length > 0 &&
          data
            .slice(0, 20)
            .map((item) => (
              <ProductItem key={item.id} data={item}></ProductItem>
            ))}
      </div>
    </>
  );
};

export default ProductList;
