import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import swper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductCard from "../UI/ProductCard";
import "./Slider.css";
import { useDispatch, useSelector } from "react-redux";
// import { ProductsData } from "../../data/products";

import { fetchProducts } from "../../Store/producstSlice";
import { useEffect } from "react";
function Slider() {
  let productsData = useSelector(state=> state.product.products)


  useEffect(()=> {
   productsData = fetchProducts()
  },[])

  console.log(productsData)
  return (
    <div className="s-container">
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        {productsData.map((slide, index) => (
          <SwiperSlide key={index}>
            <ProductCard item={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
