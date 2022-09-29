import React from "react";
import ProductItem from "./ProductItem";
import useSWR from "swr";
import { fetcher } from "../../config";
import { useNavbar } from "../../context/NavbarContext";
// https://api.escuelajs.co/api/v1/categories/1/products
const ProductList = () => {
  const [index] = useNavbar();
  console.log(index);
  const { data } = useSWR(
    `https://api.escuelajs.co/api/v1/categories/${index}/products`,
    fetcher
  );
  if (!data) return null;
  return (
    <>
      <h2 className="mb-5 font-semibold text-2xl p-4 bg-primary text-white inline-block rounded-xl">
        Tất cả sản phẩm
      </h2>
      <div className="product-list grid grid-cols-4 gap-5">
        {data.length > 0 &&
          data
            .slice(0, 40)
            .map((item) => (
              <ProductItem key={item.id} data={item}></ProductItem>
            ))}
      </div>
    </>
  );
};

export default ProductList;
