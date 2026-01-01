import css from "../components/Styles/Shop.module.css";
import { BsBasket, BsSearch } from "react-icons/bs";
import { BiArrowToBottom, BiCart } from "react-icons/bi";
import { useState } from "react";
import { useSelector } from "react-redux";
import DropDown from "../components/DropDownMenu/DropDown";
import TitleBar from "../components/TitleBar/TitleBar";
import ProductShopList from "../components/UI/ProductShopList";


function Shop() {
  const [selectedOption, setSelectedOption] = useState("");
  const products = useSelector((state) => state.product.products);

  const options = [
    { label: "Default sorting", value: "default sorting" },
    { label: "Sort by popularity", value: "sort by popularity" },
    { label: "Sort by average rating", value: "sort by average rating" },
    { label: "Sort by latest", value: "sort by latest" },
    {
      label: "Sort by price: low to high",
      value: "sort by price: low to high",
    },
    {
      label: "Sort by price: high to low",
      value: "sort by price: high to low",
    },
  ];



  return (
    <div className={css["shop_container"]}>
      <TitleBar title="Shop" />
      <div className={css.container}>
        <div className={css["shop__products"]}>
          <div className={css["shop__lefthand"]}>
            <div className={css["category__list"]}>
              <span className={css["category__title"]}>Product Categoreis</span>
              <ul>
                <li>Beauty</li>
                <li>Facial</li>
                <li>Men</li>
                <li>Health</li>
              </ul>
            </div>
            <div className={css.searchbox}>
              <input type="text" placeholder="Search Products..." name="search"></input>
              <BsSearch />
            </div>
            <div className={css["top_ratedproduct"]}>
              <span>Top rated products</span>
              {products.map((product,index) => (
                <div className={css.product} key={index}>
                  <img alt="" src={product.originalSrc} />
                  <div className={css["product__details"]}>
                    <span>{product.name}</span>
                    <span>{product.details}</span>
                    <span>${product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={css["shop__righthand"]}>
            {/* <div className={css["right__title"]}>
              <div className={css["drop__down"]}>
                <DropDown options={options} />
              </div>
              <p className={`${css.result} ${css.reverse}`}>
                showing all 2 results.
              </p>
            </div> */}
            <ProductShopList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
