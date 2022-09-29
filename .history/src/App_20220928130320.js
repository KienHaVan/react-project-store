import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import ProductList from "./components/product/ProductList";
import { Routes, Route } from "react-router-dom";
import Banner from "./components/banner/Banner";
import { NavbarProvider } from "./context/NavbarContext";
import HomePage from "./components/page/HomePage";
import ProductPage from "./components/page/ProductPage";
import CartPage from "./components/page/CartPage";
import FavoritePage from "./components/page/FavoritePage";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="app page-container mb-20">
      <NavbarProvider>
        <Routes>
          <Route element={<Main></Main>}>
            <Route
              path="/"
              element={
                <>
                  <HomePage></HomePage>
                  <ProductPage></ProductPage>
                </>
              }
            ></Route>
            <Route path="/cart" element={<CartPage></CartPage>}></Route>
            <Route
              path="/favorite"
              element={<FavoritePage></FavoritePage>}
            ></Route>

            {/* <Route
              path="/products"
              element={<ProductPage></ProductPage>}
            ></Route> */}
          </Route>
        </Routes>
      </NavbarProvider>
    </div>
  );
}

export default App;
