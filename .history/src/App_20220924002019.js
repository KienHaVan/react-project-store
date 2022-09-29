import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import ProductList from "./components/product/ProductList";
import { Routes, Route } from "react-router-dom";
import Banner from "./components/banner/Banner";
import { NavbarProvider } from "./context/NavbarContext";
import HomePage from "./components/page/HomePage";

function App() {
  return (
    <div className="app page-container mb-20">
      <NavbarProvider>
        <Routes>
          <Route element={<Header></Header>}>
            <Route path="/" element={<HomePage></HomePage>}></Route>
          </Route>
        </Routes>
      </NavbarProvider>
    </div>
  );
}

export default App;
