import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { allUsers, authorize } from "../../redux/users-slice";
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

  //or try with loop-fix this
  const isAllFieldsWithValues =
    user.name !== "" &&
    user.email !== "" &&
    user.password !== "" &&
    user.phoneNumber !== "";

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (isAllFieldsWithValues) {
      dispatch(authorize(user));
      toast.success("User Saved!");
    } else {
      toast.error("User already exists!");
    }
    navigate("/");
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
