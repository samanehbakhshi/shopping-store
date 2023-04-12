import { useLocation, Link } from "react-router-dom";
import css from "./BreadCrumbs.module.css";
function BreadCrumbs() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path !== "");
  return (
    <nav className={css.breadcrumb}>
      <ul className={css.breadcrumb}>
        <li className={css["breadcrumb-item"]}>
          <Link to="/">Home</Link>
        </li>
        <span>></span>
        {paths.map((path, index) => (
            <li
              className={`css['breadcrumb-item'] ${
                index === paths.length - 1 ? css.active : ""
              }`}
              key={path}
            >
              {index === paths.length - 1 ? (
                path
              ) : (
                <Link to={`/${paths.slice(0, index + 1).join("/")}`}>
                  {path}
                </Link>
              )}
            </li>
     
        ))}
      </ul>
    </nav>
  );
}

export default BreadCrumbs;
