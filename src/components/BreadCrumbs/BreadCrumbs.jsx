import { useLocation, Link } from "react-router-dom";
import css from "./BreadCrumbs.module.css";
import React from "react";
function BreadCrumbs() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path !== "");

  return (
    <nav className={css.breadcrumbs}>
      <ul className={css.breadcrumb}>
        <li className={css["breadcrumb-item"]}>
          <Link to="/">Home</Link>
        </li>
        <span className={css.seperator}>{">"}</span>
        {paths.map((path, index) => (
          <React.Fragment key={index}>
          {path.includes('search') ? <li key={index}f>serch result for  <span className={css.result}>{path.slice(1, 1)}</span></li>: <>
           <li
            className={`css['breadcrumb-item'] ${
              index === paths.length - 1 ? css.active : ""
            }`}
            key={index}
              >
              {index === paths.length - 1 ? (
                path
                ) : (
                <Link
                  to={`/${paths.slice(0, index + 1).join("/")}`}
                  className={css["breadcrumb-item"]}
                  >
                  {path}
                </Link>
              )}
           
            </li>
            <span className={css.seperator}>{">"}</span>
              </>
            }
          
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
}

export default BreadCrumbs;
