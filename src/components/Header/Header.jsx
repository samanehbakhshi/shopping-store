import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import css from "./Header.module.css";
import logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { GoThreeBars } from "react-icons/go";
import { BsSearch } from "react-icons/bs";
import SearchBar from "../Search/SearchBar";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useSelector } from "react-redux";
import { SlUserFollowing, SlUserUnfollow } from "react-icons/sl";

const Header = ({ styles }) => {
  const userInfo = useSelector((state) => state.auth);
  console.log(userInfo)
  const items = useSelector((state) => state.cart.items);
  const itemNumbers = items.reduce((total, item) => total + item.quantity, 0);

  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(true);
  const [openSearchBox, setOpenSearchBox] = useState(false);
  const [fixedHeader, serFixedHeader] = useState(false);

  const nav__link = [
    { path: "home", display: "Home" },
    { path: "#testimonials", display: "Testimonials" },
    { path: "#products", display: "Product" },
    { path: "shop", display: "Shop" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", handleHeaderScroll);

    return () => {
      window.removeEventListener("scroll", handleHeaderScroll);
    };
  }, []);

  const handleHeaderScroll = () => {
    if (window.scrollY > 100) {
      serFixedHeader(true);
    } else {
      serFixedHeader(false);
    }
  };
  const toggleMenu = () => {
    console.log(showMenu)
    setShowMenu((showMenu) => !showMenu);
    console.log(showMenu)
  };

  const handleSearchBox = (event, isOpen) => {
    isOpen ? setOpenSearchBox(true) : setOpenSearchBox(false);
    console.log("search", event, openSearchBox);
  };
  const background = styles.includes("/home") ? "#f8e367" : "white";

  const handleClickToCertainPlace = (event) => {
    event.preventDefault();
    console.log(event.target.pathname);
    const element = document.querySelector(event.target.hash);

    // If were in another page, and clicked on the link to certain place on the home page
    if (event.target.pathname !== "/home") {
      navigate("/home" + event.target.hash);
    }
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      navigate(event.target.pathname + event.target.hash);

      // Add active class to clicked anchor tag
      // const activeLink = document.querySelector("li.active");
      // if (activeLink && activeLink.hash === '/home') {
      //   activeLink.classList.remove("active");
      //   // event.target.add('.active')
      //   event.target.classList.add("active");
      // }
    }
  };
  const handleHomeClick = (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log(window.location.pathname);
    if (
      window.location.pathname === "/" ||
      window.location.pathname === "home"
    ) {
      // If on home page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (event.target.pathname === "/home") {
      // If on another page, navigate to home page and scroll to top
      // window.location.href = "/home";
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(event.target.pathname);
    }
  };

  return (
    <>
      <div
        className={` ${fixedHeader ? css["fixed-container"] : css.container}`}
        style={{ background: fixedHeader ? "white" : background }}
      >
        <div className={css.logo}>
          <Link to={"/home"}>
            <img src={logo} alt="site logo" />
            <span>amazon</span>
          </Link>
        </div>
         
        <div className={css.right}>
           <div className={css.bars} onClick={toggleMenu}>
            {showMenu ? <AiOutlineClose  className={`${css.closeMenu} ${css.svg}`}
                />: <GoThreeBars className={`${css.svg} ${css.openMenu}`}/>}
          </div>
          <ul
            className={css.menu}
            style={{ display: showMenu ? "inherit" : "none" }}
          >
            
            {nav__link.map((item, index) => (
              <li key={index}>
                {item.path.includes("#") ? (
                  <a href={item.path} onClick={handleClickToCertainPlace}>
                    {item.display}
                  </a>
                ) : (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? `${css.active}` : ""
                    }
                    onClick={handleHomeClick}
                    end
                  >
                    {item.display}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
            <div className={css.icons}>
              <BsSearch
                onClick={(event) => handleSearchBox(event, true)}
                className={css.svg}
              />
              <Link to={"cart"}>
                <span className={css.cart__box}>
                  <CgShoppingBag className={`${css.cart} ${css.svg} `} />
                  <span className={css.badge}>{itemNumbers}</span>
                </span>
              </Link>
              <Link to="login">
                {userInfo.isLoggedIn ? (
                  <SlUserFollowing className={css.svg} />
                ) : (
                  <SlUserUnfollow className={css.svg} />
                )}
              </Link>
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
