import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Routers from "../../routers/Routers";
import { useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation()
  const pathname = location.pathname
 
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
