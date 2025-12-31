// import 
import css from '../Styles/ProductCard.module.css';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import { useNavigate } from 'react-router-dom';
function ProductCard({item, classes}) {
  const navigate = useNavigate()
  const handleShopButton = id =>{
    navigate('/shop/'+id)
  }
  return (
    <div className={css.product}>
      <div className={`${css['left-s']} ${classes}`}>
        <div className={css.name}>
          <span>{item.name}</span>
          <span>{item.details}</span>
        </div>
        <span>{item.price}$</span>
        <motion.button whileHover={{scale: 1.2}} className={css.btn}>
          <span onClick={()=>handleShopButton(item.id)}>Shop now</span>
        </motion.button>
      </div>
      <img src={item.img} alt="product" className={css['img-p']} />
    </div>
  );
}

export default ProductCard;
