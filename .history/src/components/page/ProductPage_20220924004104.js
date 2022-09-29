import React from "react";
import { useNavbar } from "../../context/NavbarContext";

const ProductPage = () => {
  const { searchInput } = useNavbar();
  return (
    <div className="pt-[110px]">
      <>
        {searchInput && (
          <>
            <ProductList></ProductList>
          </>
        )}
      </>
    </div>
  );
};

export default ProductPage;
