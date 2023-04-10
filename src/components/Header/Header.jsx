import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import css from "./Header.module.css";
import logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { GoThreeBars } from "react-icons/go";
import { BsSearch } from "react-icons/bs";
import SearchBar from "../Search/SearchBar";

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

  const handleSearch = (event, isOpen) => {
    isOpen ? setOpenSearchBox(true): setOpenSearchBox(false);
    // setOpenSearchBox(true);
    console.log("search", event, openSearchBox);
  };

  return (
    <>
      {openSearchBox && (
        <SearchBar handleSearch={handleSearch}/>
        // <div className={css.container}>
        //   <form onSubmit={handleSearchResult}>
        //     <input type="text" value={searchedTerm} onChange={(event)=>searchInputHandler(event)}></input>
        //   </form>
        //   {/* <p>search result</p> */}
        //   <div className={css.buttons}>
        //     <Link to={openSearchResult ? 'search': ''}>
        //       <BsSearch />
        //     </Link>
        //     <a link="#" onClick={(event) => closeSearch(event)}>
        //       X
        //     </a>
        //   </div>
        // </div>
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
            <BsSearch onClick={(event)=>handleSearch(event, true)}/>
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
