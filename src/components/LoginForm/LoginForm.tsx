import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { goInPersonalAccount, isAuthorizedUser } from "../../redux/users-slice";

import "./LoginForm.css";

const Login = () => {
  const [loginUser, setLoginUser] = React.useState({
    password: "",
    email: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLoginUser({
      ...loginUser,
      [event.target.name]: value,
    });
  };

  let isUserLoggedIn = useSelector(isAuthorizedUser);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // if (email === userEmail && password === userPassword) {
    if (!isUserLoggedIn) {
      dispatch(goInPersonalAccount(loginUser.email)); //try to log in one
      navigate("/profile");
      // }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter email" onChange={handleChange} />
      <input type="text" placeholder="Enter password" onChange={handleChange} />
      <input type="checkbox" placeholder="Remember me" />
      <button type="submit" className="btnStyle">
        Sign in
      </button>
      <p>
        Don`t have an account ?<Link to="/register">Register</Link>
      </p>
    </form>
  );
};

export default Login;
