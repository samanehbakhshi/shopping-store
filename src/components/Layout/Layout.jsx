import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Routers from "../../routers/Routers";
import Hero from "../Hero/Hero";
import Slider from "../Slider/Slider";
import Products from "../Products/Products";
import Virtual from "../Virtual/Virtual";
import Testimonial from "../Testimonials/Testimonials";
import { useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation()
  const pathname = location.pathname
  console.log(pathname)
 
  return (
    <>
      <Header styles={pathname.toString()}/>

      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
