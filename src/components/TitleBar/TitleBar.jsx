import css from "./TitleBar.module.css";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
function TitleBar(props) {
  return (
    <div className={css["title_container"]}>
      <div className={css['title_box']}>

      <div className={css.title}>{props.title}</div>
      <div className={css["breadcrumbs"]}><BreadCrumbs/></div>
      </div>
    </div>
  );
}

export default TitleBar;
