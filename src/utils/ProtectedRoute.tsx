import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
  const auth = useSelector((state) => state.auth.isLoggedIn);

  // let auth = JSON.parse(localStorage.getItem("isAuth")|| '{}');
  return auth ? <Outlet /> : <Navigate to="/" />;
};
export default ProtectedRoute;
