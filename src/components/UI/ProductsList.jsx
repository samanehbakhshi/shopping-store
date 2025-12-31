import ProductCard from "./ProductCard";
import css from '../Products/Products.module.css';
function ProductsList({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <div className={css.product} key={index}>
        <ProductCard key={index} item={item}  />
        </div>
      ))}
    </>
  );
}

export default ProductsList;
