import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import css from "./Header.module.css";
import logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { GoThreeBars } from "react-icons/go";
import { BsSearch } from "react-icons/bs";
import SearchBar from "../Search/SearchBar";

const Header = ({ styles }) => {
  const [showMenu, setShowMenu] = useState(true);
  const [openSearchBox, setOpenSearchBox] = useState(false);
  const [fixedHeader, serFixedHeader] = useState(false);
  const nav__link = [
    { path: "home", display: "Home" },
    { path: "shop/:id", display: "ProductDetails" },
    { path: "shop", display: "Shop" },
    { path: "checkout", display: "Checkout" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", handleHeaderScroll);

    return () => {
      window.removeEventListener("scroll", handleHeaderScroll);
    };
  }, []);

  const handleHeaderScroll = () => {
    if (window.scrollY > 0) {
      serFixedHeader(true);
    } else {
      serFixedHeader(false);
    }
  };
  const toggleMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  const handleSearchBox = (event, isOpen) => {
    isOpen ? setOpenSearchBox(true) : setOpenSearchBox(false);
    // setOpenSearchBox(true);
    console.log("search", event, openSearchBox);
  };
  const background = styles.includes("/home") ? "#f8e367" : "white";

  console.log(styles);
  return (
    <>
      <div
        className={` ${fixedHeader ? css["fixed-container"] : css.container}`}
        style={{  background: fixedHeader?'white': background }}
      >
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
          <div className={css.icons}>
            <BsSearch onClick={(event) => handleSearchBox(event, true)} />
            <span className={css.cart__box}>
              <CgShoppingBag className={css.cart} />
              <span className={css.badge}>1</span>
            </span>
          </div>
        </div>
      </div>
      {openSearchBox && (
        <div className={css["search_header"]}>
          <SearchBar handleSearchBox={handleSearchBox} />
        </div>
      )}
    </>
  );
};

export default Header;
