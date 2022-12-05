import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { isAccessor } from "typescript";
import { login, selectUser } from "../../app/user-slice";
import "./RegisterForm.css";

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    id: Math.random(),
  });

  const isAllFieldsWithValues =
    user.name !== "" &&
    user.email !== "" &&
    user.password !== "" &&
    user.phoneNumber !== "";

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    //helper for toastify: should be here

    if (isAllFieldsWithValues) {
      dispatch(
        login({
          name: user.name,
          email: user.email,
          password: user.password,
          loggedIn: true,
        })
      );
      toast.success("User Saved!");
      navigate("/");
    }
  };

  return (
    <div className="register-container">
      {isAllFieldsWithValues && <span></span>}

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setUser({ ...user, name: event.target.value })
            }
          />
          <input
            type="text"
            placeholder="Enter your email"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setUser({ ...user, email: event.target.value })
            }
          />
        </div>

        <div className="">
          <label htmlFor="">Gender</label>
          {/*  variants should be */}
          <span>female</span>
          <span>male</span>
        </div>
        <input
          type="text"
          placeholder="Enter your phone number"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setUser({ ...user, phoneNumber: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Enter your password"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setUser({ ...user, password: event.target.value })
          }
        />
        <input type="text" placeholder="Confirm your password" />
        <input
          type="checkbox"
          name=""
          id=""
          placeholder="I accept the terms and conditions."
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default RegisterForm;
