import css from "../components/Styles/Shop.module.css";
import { BsBasket, BsSearch } from "react-icons/bs";
import { BiArrowToBottom, BiCart } from "react-icons/bi";
import { useState } from "react";
import DropDown from "../components/DropDownMenu/DropDown";
import TitleBar from "../components/TitleBar/TitleBar";
import ProductShopList from "../components/UI/ProductShopList";
import Header from "../components/Header/Header";
import Image from "../assets/img1.png";
import Pro1 from "../assets/1.jpg";
import Pro2 from "../assets/2.jpg";
import Pro3 from "../assets/3.jpg";
import Pro4 from "../assets/4.jpg";
import Pro5 from "../assets/5.jpg";
import Pro6 from "../assets/6.jpg";

function Shop() {
  const [selectedOption, setSelectedOption] = useState("");

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

  const data = [
    {
      id: 0,
      name: "shampoo",
      description: "skin Care",
      price: 32,
      originalSrc: Pro1,
      hoverSrc: Pro4,
    },
    {
      id: 1,
      name: "soap",
      description: "skin washing",
      price: 2.43,
      originalSrc: Pro2,
      hoverSrc: Pro5,
    },
    {
      id: 2,
      name: "brush",
      description: "tooth brush",
      price: 32.4,
      originalSrc: Pro3,
      hoverSrc: Pro6,
    },
  ];

  return (
        <div className={css["shop_container"]}>
        <TitleBar title='shop'/>
        <div className={css.container}>
          <div className={css["shop__products"]}>
            <div className={css["shop__lefthand"]}>
              <div className={css["category__list"]}>
                <span className={css["category__title"]}>
                  Product categoreis
                </span>
                <ul>
                  <li>Beauty</li>
                  <li>Facial</li>
                  <li>Men</li>
                  <li>Health</li>
                </ul>
              </div>
              <div className={css.searchbox}>
                <input type="text" placeholder="Search Products..."></input>
                <BsSearch />
              </div>
              <div className={css["top_ratedproduct"]}>
                <span>Top rated products</span>
                {data.map((product) => (
                  <div className={css.product}>
                    <img alt="" src={product.originalSrc} />
                    <div className={css["product__details"]}>
                      <span>{product.name}</span>
                      <span>{product.description}</span>
                      <span>${product.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={css["shop__righthand"]}>
              <div className={css["right__title"]}>
                <DropDown options={options} />
                <div className={css["result"]}>
                  <span>showing all 2 results.</span>
                </div>
              </div>
              <ProductShopList data={data} />
            </div>
          </div>
        </div>
      </div>
  );
}

export default Shop;
