import css from "./ShoppingCart.module.css";
import img from "../../assets/1.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

function ShoppingCart() {
  const items = [
    { id: 1, name: "ali", price: 12.0 },
    { id: 2, name: "sara", price: 33.45 },
  ];
  return (
    <div className={css.container}>
      <h2 className={css.title}>Shopping Cart</h2>
      {items.length === 0 ? (
        <p className={css.message}> your cart is empty.</p>
      ) : (
        <div className={css["shop-list"]}>
          {items.map((item, index) => (
            <div key={index} className={css["shop-list-item"]}>
              <img className={css["item-image"]} src={img} />
              <div className={css["item-detail"]}>
                <span className={css["item-name"]}>{item.name}</span>
                <span className={css.number}>1</span>
                <span className={css.price}>${item.price}</span>
                <span className={css.increase} >+</span>
                <span className={css.decrease} >-</span>
                <span className={css.btn}>
                  <AiOutlineClose />
                </span>
              </div>
            </div>
          ))}
          <p className={css["total-price"]}>Total price: $</p>
          <Link to={"checkout"} className={css.link}>
            Checkout
          </Link>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
