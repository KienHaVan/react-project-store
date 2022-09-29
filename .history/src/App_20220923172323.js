import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import ProductList from "./components/product/ProductList";
import { Routes, Route } from "react-router-dom";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <div className="app page-container mb-20">
      <Header></Header>
      <Navbar></Navbar>
      <Banner></Banner>
      <ProductList></ProductList>
    </div>
  );
}

export default App;
