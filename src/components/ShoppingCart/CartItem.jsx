import css from './ShoppingCart.module.css'
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartSlice } from '../../Store/cartSlice';
import { updatedQuantity , removeItem} from '../../Store/cartSlice';
function CartItem( {item}) {
  const items = useSelector(state => state.cart.items)
  const  dispatch = useDispatch()
  const totalPrice = items.reduce((total, item) => {
    return total + (Number(item.price) * item.quantity)
  },0)

  const {id,price,quantity, name} = item

  const handleremoveItem =(item) => {
    console.log(item)
    dispatch(removeItem(item));
  }
  console.log(items)
const handleIncreaseItem = ()=>{
  console.log('add')
  dispatch(updatedQuantity({id:id, quantity: 1 }))
}
const handleDecreaseItem = ()=>{
  if(quantity > 1){
    dispatch(updatedQuantity({id:id, quantity: -1}))
  }
}
  return (  <div className={css["shop-list-item"]}>
  <img className={css["item-image"]} src={item.img} />
  <div className={css["item-detail"]}>
    <span className={css["item-name"]}>{item.name}</span>
    <span className={css.number}>{item.quantity}</span>
    <span className={css.price}>${item.price}</span>
    <span className={css.increase} onClick={handleIncreaseItem} >+</span>
    <span className={css.decrease} onClick={handleDecreaseItem}>-</span>
    <span className={css.btn} onClick={()=>handleremoveItem(item)}>
      <AiOutlineClose />
    </span>
  </div>
</div>);
}

export default CartItem;