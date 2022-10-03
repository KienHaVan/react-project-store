import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import useSWR from "swr";
import { fetcher } from "../../config";
import { useNavbar } from "../../context/NavbarContext";
import useDebounce from "../../hooks/useDebounce";
import ReactPaginate from "react-paginate";
// https://api.escuelajs.co/api/v1/categories/1/products
const itemsPerPage = 20;
const ProductList = () => {
  const { item, searchInput } = useNavbar();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [url, setUrl] = useState(
    `https://api.escuelajs.co/api/v1/categories/${item.id}/products?offset=10&limit=10`
  );
  const searchDebounce = useDebounce(searchInput, 500);
  useEffect(() => {
    if (searchDebounce) {
      setUrl(`https://fakestoreapi.com/products?sort=${searchDebounce}`);
    } else {
      setUrl(
        `https://api.escuelajs.co/api/v1/categories/${item.id}/products?offset=10&limit=10`
      );
    }
  }, [item.id, searchDebounce]);
  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setPageCount(Math.ceil(data?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  if (!data) return null;

  return (
    <>
      <div className="mb-5 font-semibold text-2xl p-4 bg-primary text-white inline-block rounded-xl">
        <h2>Tất cả sản phẩm / {!searchInput ? item.name : "Tìm kiếm"}</h2>
      </div>
      {loading && (
        <div className="h-10 w-10 rounded-full border-4 border-primary border-t-4 border-t-transparent animate-spin mx-auto"></div>
      )}
      <div className="product-list grid grid-cols-4 gap-5">
        {!loading &&
          data.length > 0 &&
          data.map((item) => (
            <ProductItem key={item.id} data={item}></ProductItem>
          ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default ProductList;
