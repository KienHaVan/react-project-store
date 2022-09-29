import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import ProductList from "./components/product/ProductList";
import { Routes, Route } from "react-router-dom";
import Banner from "./components/banner/Banner";
import { NavbarProvider } from "./context/NavbarContext";

function App() {
  return (
    <div className="app page-container mb-20">
      <NavbarProvider>
        <Routes>
          <Route
            element={
              <div className="shadow-xl">
                <Header></Header>
                <Navbar></Navbar>
              </div>
            }
          >
            <Route
              path="/"
              element={
                <>
                  <Banner></Banner>
                  <ProductList></ProductList>
                </>
              }
            ></Route>
          </Route>
        </Routes>
      </NavbarProvider>
    </div>
  );
}

export default App;
