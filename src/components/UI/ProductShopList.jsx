import css from './ProductShopList.module.css';
import ProductShop from '../ProductShop/ProductShop';
import { useSelector } from 'react-redux';
function ProductShopList({productList}) {
  const products = productList || useSelector(state=>state.product.products)
  return ( 
    <div className={css['product__list']}>
      {products.map((product,i)=>(
        <ProductShop key={i} product={product}/>
      ))}
    </div>
   );
}

export default ProductShopList;