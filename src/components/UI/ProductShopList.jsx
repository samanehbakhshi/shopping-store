import css from '../Styles/Shop.module.css';
import ProductShop from '../ProductShop/ProductShop';
function ProductShopList({data}) {
  return ( 
    <div className={css['product__list']}>
      {data.map((product,i)=>(
        <ProductShop key={i} product={product}/>
      ))}
    </div>
   );
}

export default ProductShopList;