import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  let auth = JSON.parse(localStorage.getItem("isAuth")|| '{}');
  return auth ? <Outlet /> : <Navigate to="/" />;
};
export default ProtectedRoute;
