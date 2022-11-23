import {  useNavigate } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
// import "./Logout.css";

function ProfilePage() {
  const navigate = useNavigate();
  const user = useSelector(selectUser); //we need this to show info about user
  //before you will want to log out

  const dispatch = useDispatch();

  const handleLogout = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    try {
     await dispatch(logout());
      navigate("/");
    } catch (error) {
      // handle any rejections/errors
    }
  };

  return (
    <div className="logout">
      <h1>
        Welcome
        <span className="user__name">{user.name}</span>
      </h1>
      <button className="logout__button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default ProfilePage;

// import { useDispatch, useSelector } from "react-redux";
// import { logout, selectUser } from "../../features/userSlice";
// import "./Logout.css";

// const Logout = () => {
//   const user = useSelector(selectUser);//we need this to show info about user
//   //before you will want to log out

//   const dispatch = useDispatch();

//   const handleLogout = (event: React.MouseEvent<HTMLElement>) => {
//     event.preventDefault();
//     dispatch(logout());
//   };

//   return (
//     <div className="logout">
//       <h1>
//         Welcome
//         <span className="user__name">{user.name}</span>
//         {/* //user?.name */}
//       </h1>
//       <button className="logout__button" onClick={handleLogout}>
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Logout;
