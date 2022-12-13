import React, { useState, useEffect, ReactNode } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useFetcher } from "react-router-dom";
import { toast } from "react-toastify";
// import { login } from "../../app/auth-slice";
import {
  // authorize,
  goInPersonalAccount,
  isAuthorizedUser,
} from "../../redux/users-slice";

import "./LoginForm.css";

const Login: React.FC = () => {
  // const [user, setUser] = useState<{ email: string; password: string }>({
  //   email: "",
  //   password: "",
  // });

  let isUserLoggedIn = useSelector(isAuthorizedUser);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const setUserData = (userDataCategory: string, userData: string) => {
  //   switch (userData) {
  // };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // if (email === userEmail && password === userPassword) {
    if (!isUserLoggedIn) {
      dispatch(goInPersonalAccount(user.email)); //try to log in one
      toast.success("Login Success");
      navigate("/profile");
    } else {
      toast.error(
        "Invalid Email OR password - try to register( maybe your user not exist)"
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter email"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(event.target.value)
        }
      />
      <input
        type="text"
        placeholder="Enter password"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(event.target.value)
        }
      />
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
