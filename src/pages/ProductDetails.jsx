import { useParams } from "react-router-dom";
import { useState } from "react";
import css from "../components/Styles/ProductDetails.module.css";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import TitleBar from "../components/TitleBar/TitleBar";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../Store/cartSlice";

function ProductDetails() {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const changeQuantity = (e) => {
    setQuantity((Number(e.target.value)));
  };

  const handleDecreaseQuantity = () => {
      setQuantity((prevQuantity) => prevQuantity > 1? prevQuantity - 1: 1);
  };
  const handleIncreaseQuantity = () => {
      setQuantity((prevQuantity) =>
        prevQuantity < 5 ? prevQuantity + 1 : prevQuantity
      );
  };
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const mainProduct = products.filter((product) => product.id == id)[0];

  const handleAddItem = (item, quantity) => {
    dispatch(addItem({ item, quantity }));
  };
  return (
    <div className={css.container}>
      <TitleBar title="shop" />
      <div className={css.productDetails}>
        <div className={css["product_image"]}>
          <div className={css["main_image"]}>
            <img src={mainProduct.img} alt="" />
            <div className={css.overlay} />
          </div>
          <div className={css["other_image"]}>
            <img src={mainProduct.originalSrc} alt="" />
            <img src={mainProduct.hoverSrc} alt="" />
          </div>
        </div>
        <div className={css["product_details"]}>
          <div className={css["prodct_info"]}>
            <span className={css["product_name"]}>{mainProduct.name}</span>
            <span className={css["product_price"]}>${mainProduct.price}</span>
            <p className={css["product_description"]}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              tempore facere, aspernatur ab consequatur non voluptas molestias
              perferendis impedit deleniti adipisci laboriosam voluptatibus.
              Perspiciatis explicabo a assumenda cupiditate, laborum
              accusantium? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Necessitatibus voluptate alias quae, minus enim natus
              ratione nisi est quibusdam laudantium nihil, quo officiis
              doloribus quidem expedita asperiores cum, corporis doloremque.
            </p>
            <div className={css["product_shopItem"]}>
              <div className={css["increaseAndDecrease"]}>
                <BsArrowDown onClick={handleDecreaseQuantity} />
                <input
                  type="number"
                  min={1}
                  max={3}
                  value={quantity}
                  className={css["product_number"]}
                  onChange={changeQuantity}
                />
                <BsArrowUp onClick={handleIncreaseQuantity} />
              </div>

              <span
                className={css["add_btn"]}
                onClick={() => handleAddItem(mainProduct, quantity)}
              >
                <BiCart />
                <span>Add to cart</span>
              </span>
            </div>
            <div className={css["product_information"]}>
              <span className={css["wrapper"]}>
                <span>sku:</span>
                <a>1</a>
                <a>- 2</a>
              </span>
              <span className={css["wrapper"]}>
                <span>Categories:</span>
                <a>Cream,</a>
                <a> Men,</a>
                <a>Facial</a>
              </span>
              <span className={css["wrapper"]}>
                <span>Tags:</span>
                <a>Aftershave,</a>
                <a>Cream,</a>
                <a>Women,</a>
                <a>Moisturizer</a>
              </span>
            </div>
          </div>
          <div className={css["description"]}>
            Description
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              aspernatur eaque esse quas aperiam hic dolor quam, recusandae
              necessitatibus excepturi repudiandae? Sunt perspiciatis veritatis
              non cumque omnis itaque voluptatem soluta.lorem Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Similique iure quae ex
              possimus minima, cupiditate saepe quasi nemo. Nobis assumenda
              consequatur reprehenderit quo necessitatibus architecto fuga
              reiciendis natus soluta nemo. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Quisquam quidem, doloribus ab minus
              at et quis placeat aspernatur corrupti esse excepturi atque vitae
              molestias maxime animi aperiam sunt quia aliquam. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Officiis hic,
              asperiores sequi optio ut ipsum officia amet, esse dolore vero
              sunt aliquam eaque nisi repellat culpa quibusdam, necessitatibus
              ad voluptatibus?
            </p>
          </div>
        </div>
      </div>
      {/* <div className={css["related_products"]}>
        <h2>Related Products</h2>
        <ProductShopList />
      </div> */}
    </div>
  );
}

export default ProductDetails;
