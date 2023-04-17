import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
import ProductShop from "../components/ProductShop/ProductShop";
import css from "../components/Styles/ProductDetails.module.css";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import TitleBar from "../components/TitleBar/TitleBar";

function ProductDetails() {
  const { id } = useParams();
  return (
    <div className={css.container}>
      <TitleBar title="shop" />
      <div className={css.productDetails}>
        <div className={css["product_image"]}>
          <div className={css["main_image"]}>
            <img src={image1} alt="" />
            <div className={css.overlay} />
          </div>
          <div className={css["other_image"]}>
            <img src={image2} alt="" />
            <img src={image3} alt="" />
          </div>
        </div>
        <div className={css["product_details"]}>
          <div className={css["prodct_info"]}>
            <span className={css["product_name"]}>crux for men</span>
            <span className={css["product_price"]}>$12.99</span>
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
                <BsArrowDown />
                <spn className={css["product_number"]}>1</spn>
                <BsArrowUp />
              </div>
              <Link to="/checkout">
                <span className={css["add_btn"]}>
                  <BiCart />
                  <spn>Add to cart</spn>
                </span>
              </Link>
            </div>
            <div className={css["product_information"]}>
              <span className={css["wrapper"]}>
                <span>sku:</span>
                <span>1-2</span>
              </span>
              <span className={css["wrapper"]}>
                <span>Categories:</span>
                <span>Cream, For men, Facial</span>
              </span>
              <span className={css["wrapper"]}>
                <span>Tags:</span>
                <span>Aftershave, Cream, For men, Moisturizer</span>
              </span>
            </div>
          </div>
          <div className={css["description"]}>Description
          
          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aspernatur eaque esse quas aperiam hic dolor quam, recusandae necessitatibus excepturi repudiandae? Sunt perspiciatis veritatis non cumque omnis itaque voluptatem soluta.lorem

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique iure quae ex possimus minima, cupiditate saepe quasi nemo. Nobis assumenda consequatur reprehenderit quo necessitatibus architecto fuga reiciendis natus soluta nemo.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quidem, doloribus ab minus at et quis placeat aspernatur corrupti esse excepturi atque vitae molestias maxime animi aperiam sunt quia aliquam.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis hic, asperiores sequi optio ut ipsum officia amet, esse dolore vero sunt aliquam eaque nisi repellat culpa quibusdam, necessitatibus ad voluptatibus?
          </p>
          </div>
        </div>
      </div>
      <div className={css["related_products"]}>
        <h2>Related Products</h2>
        product card
      </div>
    </div>
  );
}

export default ProductDetails;
