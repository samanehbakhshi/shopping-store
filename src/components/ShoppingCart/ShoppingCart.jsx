import css from "./ShoppingCart.module.css";
import img from "../../assets/1.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {removeItem, updatedQuantity} from '../../Store/cartSlice'
import CartItem from "./CartItem";
function ShoppingCart() {

  const items = useSelector(state => state.cart.items)
  const  dispatch = useDispatch()
  const totalPrice = items.reduce((total, item) => {
    return total + (Number(item.price) * item.quantity)
  },0)



  return (
    <div className={css.container}>
      <h2 className={css.title}>Shopping Cart</h2>
      {items.length === 0 ? (
        <p className={css.message}> your cart is empty.</p>
      ) : (
        <div className={css["shop-list"]}>
          {items.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
          <p className={css["total-price"]}>Total price: ${totalPrice}</p>
          <Link to={"checkout"} className={css.link}>
            Checkout
          </Link>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
