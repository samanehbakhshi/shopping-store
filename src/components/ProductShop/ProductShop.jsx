import css from "./ProductShop.module.css";
import { useState } from "react";
import { BiCart } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

function ProductShop({ product }) {
  const navigate = useNavigate();
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
  const handleProductDetail = (id) => {
    navigate(`/shop/${id}`)
  };
  return (
    <div className={css.productcard}>
      <div className={css["image_container"]} onClick={()=>handleProductDetail(product.id)}   onMouseOver={handleHover}
          onMouseOut={handleMouseOut}>
        <img
          className={css.image}
        
          src={imageSrc}
          alt="example image"
        />
        {/* Add the overlay element here  */}
        <div className={css.overlay}></div>
      </div>

      <div className={css["product__detail"]} onClick={()=>handleProductDetail(product.id)}>
        <span className={css["product__name"]}>{product.name}</span>
        <span className={css["product__category"]}>{product.description}</span>
        <span className={css["product__price"]}>${product.price}</span>
      </div>
      <div className={css["product__btn"]}>
        <Link to="checkout">
          Add To cart
          <BiCart />
        </Link>
      </div>
    </div>
  );
}

export default ProductShop;
