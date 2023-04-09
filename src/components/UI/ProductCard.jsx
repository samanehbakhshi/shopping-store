// import 
import css from '../Styles/ProductCard.module.css';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
function ProductCard({item, classes}) {
  return (
    <div className={css.product}>
      <div className={`${css['left-s']} ${classes}`}>
        <div className={css.name}>
          <span>{item.name}</span>
          <span>{item.details}</span>
        </div>
        <span>{item.price}$</span>
        <motion.button whileHover={{scale: 1.2}} className={css.btn}>
          <Link to="shop">Shop now</Link>
        </motion.button>
      </div>
      <img src={item.img} alt="product" className={css['img-p']} />
    </div>
  );
}

export default ProductCard;
