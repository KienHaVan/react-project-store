import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import useSWR from "swr";
import { fetcher } from "../../config";
import { useNavbar } from "../../context/NavbarContext";
import useDebounce from "../../hooks/useDebounce";
// https://api.escuelajs.co/api/v1/categories/1/products
const ProductList = () => {
  const { item, searchInput } = useNavbar();
  const [url, setUrl] = useState(
    `https://api.escuelajs.co/api/v1/categories/${item.id}/products`
  );
  const searchDebounce = useDebounce(searchInput, 5000);
  useEffect(() => {
    if (searchDebounce) {
      setUrl(`https://fakestoreapi.com/products?sort=${searchDebounce}`);
    } else {
      setUrl(`https://api.escuelajs.co/api/v1/categories/${item.id}/products`);
    }
  }, [item.id, searchDebounce]);
  const { data } = useSWR(url, fetcher);
  if (!data) return null;
  return (
    <>
      <div className="mb-5 font-semibold text-2xl p-4 bg-primary text-white inline-block rounded-xl">
        <h2>Tất cả sản phẩm / {!searchInput ? item.name : "Tìm kiếm"}</h2>
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
