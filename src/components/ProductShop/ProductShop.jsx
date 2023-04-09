
import css from "./ProductShop.module.css";
import { useState } from "react";
import { BiCart } from "react-icons/bi";
function ProductShop({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageSrc, setImageSrc] = useState(product.originalSrc);
  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleHover = () => {
    console.log("hover");
    if (!isHovered) {
      setIsHovered(true);
      setImageSrc(product.hoverSrc);
    }
  };
  const handleMouseOut = () => {
    console.log("mouse out");
    if (isHovered) {
      setIsHovered(false);
      setImageSrc(product.originalSrc);
    }
  };
  console.log(isHovered);
  return (
    <div className={css.productcard}>
      <div className={css["image_container"]}>
        <img
          className={css.image}
          onMouseOver={handleHover}
          onMouseOut={handleMouseOut}
          src={imageSrc}
          alt="example image"
        />
        {/* Add the overlay element here  */}
        <div className={css.overlay}></div>
      </div>

      <div className={css["product__detail"]}>
        <span className={css["product__name"]}>{product.name}</span>
        <span className={css["product__category"]}>{product.description}</span>
        <span className={css["product__price"]}>${product.price}</span>
      </div>
      <div className={css["product__btn"]}>
        <span>Add To cart</span>
        <BiCart />
      </div>
    </div>
  );
}

export default ProductShop;
