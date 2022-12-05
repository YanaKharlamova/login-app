import { useNavigate } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../app/user-slice";

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

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
        <span className="user__name">{user?.name}</span>
      </h1>
      <button className="logout__button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
