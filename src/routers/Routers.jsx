import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import SearchResult from "../pages/SearchResult";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/" element={<div>HOME STATIC</div>} /> */}

      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/search/:query" element={<SearchResult />} />
    </Routes>
  );
}

export default Routers;
