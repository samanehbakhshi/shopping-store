import css from "../components/Styles/Signup.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../Store/authSlice";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const dispatch = useDispatch();

  const handleSignup = (e) => {
    e.preventDefault();
    const user = { name, password, phone, confirmPassword };
    dispatch(signup(user));
    navigate("/home");
  };
  return (
    <div className={css.container}>
      <h1>Sign up</h1>
      <form onSubmit={handleSignup} className={css.form}>
        <div className={css.wrapper}>
          <label>Full Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
        </div>
        <div className={css.wrapper}>
          <label>Email or Phone</label>
          <input
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          ></input>
        </div>
        <div className={css.wrapper}>
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
        </div>
        <div className={css.wrapper}>
          <label>Confirm Password</label>
          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          ></input>
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default Signup;
