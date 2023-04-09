import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { GoThreeBars } from "react-icons/go";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [openSearchBox, setOpenSearchBox] = useState(false);
  const nav__link = [
    { path: "home", display: "Home" },
    { path: "shop/:id", display: "Sales" },
    { path: "shop", display: "Collection" },
    { path: "checkout", display: "Brands" },
  ];
  const toggleMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  const handleSearch = (event) => {
    setOpenSearchBox(true);
    console.log("search", event, openSearchBox);
  };
  const closeSearch=(event) => {
    event.preventDefault();
    setOpenSearchBox(false)
  }
  return (
    <>
      {openSearchBox && (
        <div className={css.container}>
          <p>search result</p>
          <button onClick={(event)=> closeSearch(event)}>
          </button>
        </div>
      )}
      {!openSearchBox && (
        <div className={css.container}>
          <div className={css.logo}>
            <img src={logo} alt="site logo" />
            <span>amazon</span>
          </div>
          <div className={css.right}>
            <div className={css.bars} onClick={toggleMenu}>
              <GoThreeBars />
            </div>
            <ul
              className={css.menu}
              style={{ display: showMenu ? "inherit" : "none" }}
            >
              {nav__link.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? `${css.active}` : ""
                    }
                    end
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>

            <input
              type="text"
              className={css.search}
              placeholder="search"
              onClick={(event) => handleSearch(event)}
            ></input>
            <span className={css.cart__box}>
              <CgShoppingBag className={css.cart} />
              <span className={css.badge}>1</span>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
