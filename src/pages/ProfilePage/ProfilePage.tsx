import { useNavigate } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { allUsers, logout } from "../../app/user-slice";
// import { login, logout } from "../../app/auth-slice";

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  const currentlyLoggedInUser = useSelector(allUsers).find(
    (user: { currentlyOnline: boolean }) => user.currentlyOnline
  );
  // console.log("currOnline", currentlyLoggedInUser);

  const dispatch = useDispatch();

  const handleLogout = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    try {
      await dispatch(logout());
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="logout">
      <h1>
        Welcome
        <span className="user__name">{currentlyLoggedInUser?.name}</span>
      </h1>
      <button className="logout__button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
