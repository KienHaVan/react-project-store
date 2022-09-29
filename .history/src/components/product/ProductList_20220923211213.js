import React from "react";
import ProductItem from "./ProductItem";
import useSWR from "swr";
import { fetcher } from "../../config";
import { useNavbar } from "../../context/NavbarContext";
// https://api.escuelajs.co/api/v1/categories/1/products
const ProductList = () => {
  const [item] = useNavbar();
  console.log(item);
  const { data } = useSWR(
    `https://api.escuelajs.co/api/v1/categories/${item.id || 1}/products`,
    fetcher
  );
  if (!data) return null;
  return (
    <>
      <div className="mb-5 font-semibold text-2xl p-4 bg-primary text-white inline-block rounded-xl">
        <h2>Tất cả sản phẩm / {item.name}</h2>
      </div>
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
