import { useNavigate } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { allUsers, logout, currentUser } from "../../redux/users-slice";

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  const currentlyLoggedInUser = useSelector(currentUser);

  const dispatch = useDispatch();

  const handleLogout = (event: React.MouseEvent<HTMLElement>) => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="logout">
      <h1>
        Welcome
        <span className="user__name"> {currentlyLoggedInUser?.name}</span>
      </h1>
      <button className="logout__button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
