import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Routers from "../../routers/Routers";
import Hero from "../Hero/Hero";
import Slider from "../Slider/Slider";
import Products from "../Products/Products";
import Virtual from "../Virtual/Virtual";
import Testimonial from "../Testimonials/Testimonials";

function Layout() {
  return (
    <div>
      <Header />

      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
