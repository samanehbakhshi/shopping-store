import css from "./Products.module.css";
import Plan from "../../assets/plane.png";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import ProductsList from "../UI/ProductsList";
import { useSelector } from "react-redux";
function Products({ data }) {
  const products = useSelector(state => state.product.products)
  const [parent] = useAutoAnimate();
  const [MenuProducts, setMenuProducts] = useState(products);
  const [activeItem, setActiveItem] = useState("all");
  const filter = (type) => {
    if (type === "all") {
      setMenuProducts(products);
    } else {
      setMenuProducts(products.filter((product) => product.type === type));
    }
    setActiveItem(type)
  };
  const productMenuItems = [
    {type: 'all', display: 'All'},
    {type: 'skin care', display: 'Skin Care'},
    {type: 'conditioner', display: 'Conditioner'},
    {type: 'foundation', display: 'Foundation'},
  ]
  return (
    <div className={css["p-container"]} id="products">
      <img alt="product" src={Plan} />
      <h1>Our Feature Products</h1>
      <div className={css.products}>
        <ul className={css.menu}>
          {productMenuItems.map((item,index)=>(
            <li key={index} onClick={()=>filter(item.type)} className={activeItem === item.type ? `${css.active}`: ''}>{item.display}</li>
          ))}
        </ul>

        <div className={css.list} ref={parent}>
          <ProductsList data={MenuProducts} />
        </div>
      </div>
    </div>
  );
}

export default Products;
