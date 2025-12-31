import css from "./Footer.module.css";
import Logo from "../../assets/logo.png";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className={css.footerWrapper}>
      <hr />
      <div className={css.wrapper}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span className={css.logoText}>amazon</span>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon />
              11 noth avenue Oriando, FL 31
            </span>

            <span className={css.pngLine}>
              <PhoneIcon />
              352-206-4415
            </span>
            <span className={css.pngLine}>
              <InboxIcon />
              <Link to="#">support@amazon.com</Link>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon />
              <Link to="signin">Sign in</Link>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UsersIcon />
              <Link to="#"> About us</Link>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Privacy</span>
            <span className={css.pngLine}>
              <LinkIcon />
              <Link to="3">Safty Privacy & Terms</Link>
            </span>
          </div>
        </div>
      </div>
      <div className={css.copyright}>
        <span>Copyright &copy; 2022 by amazon inc</span>
        <span>All rights reserved</span>
      </div>
    </div>
  );
}

export default Footer;
