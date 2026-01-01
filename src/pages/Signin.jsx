import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {signin } from '../Store/authSlice';
import { useNavigate } from "react-router-dom";

function Signin (){
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleSignin = (e) => {
    e.preventDefault();
    const user = { username, password };
    dispatch(signin(user));
    navigate("/home");
  };
  return ( <div className={css.container}>
    <h1>Sign in</h1>
    <form onSubmit={handleSignin} className={css.form}>
      <div className={css.wrapper}>
        <label>Username</label>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
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
      <button type="submit">Sign in</button>
    </form>
  </div>)
}

export default Signin;