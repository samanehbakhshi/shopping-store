import { useState } from "react";
import css from "../components/Styles/Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Store/authSlice";
import { useNavigate } from "react-router-dom";
function Login() {
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
 

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout(user));
    navigate("/home");
  }

  const logoutContent = (
    <>
      <h1>Logout</h1>
      <form onSubmit={handleLogout} className={css.form}>
        <label>Are you sure you want to logout?</label>
        <button onClick={()=>navigate('/home')}>Cancel</button>
        <button type="submit">Log out</button>
      </form>
    </>
  );


  return (
    <div className={css.container}>
{user.isLoggedIn ? logoutContent: <form className={css.form}>
      <h1>WELCOME BACK</h1>
      <button onClick={()=> navigate('/signin')}>SIGN IN</button>
      <button onClick={()=> navigate('/signup')}>SIGN UP</button>
      </form>
       }
     

      
    </div>
     
       
  );
}

export default Login;
