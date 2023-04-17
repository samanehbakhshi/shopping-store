import css from "./Testimonials.module.css";
import Shade from "../../assets/testimonialHero.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsData } from "../../data/testimonials";

function Testimonials() {
  return (
    <div className={css.Testimonial} id="testimonials">
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>top rated</span>
          <span>
            seedily say has suitable disposal and boy. exercise joy man children
            rejoiced.
          </span>
        </div>

        <img alt="" src={Shade} />

        <div className={css.container}>
          <span>100K</span>
          <span>happy customers with us</span>
        </div>
      </div>
      <div className={css.reviews}>reviews</div>
      <div className={css.carousel}>
        <Swiper
          slidesPerGroup={1}
          slidesPerView={3}
          spaceBetween={20}
          breakpoints={{
            856: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            0: { slidesPerView: 1 },
          }}
          className={css.tcarousel}
        >
          {TestimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className={css.testimonial}>
                <img src={testimonial.image} />
                <span>{testimonial.comment}</span>
                <hr />
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
