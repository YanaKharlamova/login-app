import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { isAuthorizedUser } from "../app/user-slice";
// import { isLoggedIn } from "../app/auth-slice";

const ProtectedRoute: React.FC = () => {
  const isLogged = useSelector(isAuthorizedUser);

  // let auth = JSON.parse(localStorage.getItem("isAuth")|| '{}');
  return isLogged ? <Outlet /> : <Navigate to="/" />;
};
export default ProtectedRoute;
