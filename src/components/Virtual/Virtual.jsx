import css from "./Virtual.module.css";
import  Shade from '../../assets/shade.png';
import ReactCompareImage from "react-compare-image";
import Before from '../../assets/before.png';
import After from '../../assets/after.png';
function Virtual() {
  return (
    <div className={css.virtual}>
      <div className={css["left_side"]}>
        <span>vitual try-on</span>
        <span>never bye the wrong shade again!</span>
        <span>Try Now!</span>
        <img src={Shade} alt="" />
      </div>
      <div className={css["right-side"]}>
        <div className={css.wrapper}>
        <ReactCompareImage leftImage={Before} rightImage={After}/>
        </div>
      </div>

    </div>
    
  );
}

export default Virtual;
