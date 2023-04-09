import css from "./Products.module.css";
import Plan from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Link } from "react-router-dom";
import ProductsList from "../UI/ProductsList";
function Products({ data }) {
  const [parent] = useAutoAnimate();
  const [MenuProducts, setMenuProducts] = useState(ProductsData);
  const [activeItem, setActiveItem] = useState("all");
  const filter = (type) => {
    if (type === "all") {
      setMenuProducts(ProductsData);
    } else {
      setMenuProducts(ProductsData.filter((product) => product.type === type));
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
    <div className={css["p-container"]}>
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
