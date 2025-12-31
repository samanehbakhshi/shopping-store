import Helmet from "../components/Helmet/Helmet";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import Virtual from "../components/Virtual/Virtual";
import Products from "../components/Products/Products";
import Testimonials from "../components/Testimonials/Testimonials";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { ProductsData } from "../data/products";
import { useState } from "react";
function Home() {
  return (
    <Helmet title="Home">
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonials />
    </Helmet>
  );
}

export default Home;
