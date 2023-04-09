import Helmet from "../components/Helmet/Helmet";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import Virtual from "../components/Virtual/Virtual";
import Products from "../components/Products/Products";
import Testimonial from "../components/Testimonials/Testimonials";
import { ProductsData } from "../data/products";
import { useState } from "react";
function Home() {
  return (
    <Helmet title="Home">
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonial />
    </Helmet>
  );
}

export default Home;
