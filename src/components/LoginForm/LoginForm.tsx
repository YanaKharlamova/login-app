import React, { useState, useEffect, ReactNode } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useFetcher } from "react-router-dom";
import { toast } from "react-toastify";
import {
  selectUser,
  isAuthorized,
  selectIsAuthorized,
} from "../../app/user-slice";
import "./LoginForm.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //
  const userInfo = useSelector(selectUser);
  const userInfoiAuth = useSelector(selectIsAuthorized);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (email === userEmail && password === userPassword) {
      dispatch(
        isAuthorized({
          isAuthorized: true,
        })
      );

      toast.success("Login Success");
      navigate("/profile");
    } else {
      toast.error("Invalid Email OR password");
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
