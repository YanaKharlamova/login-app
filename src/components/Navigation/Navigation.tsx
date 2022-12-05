import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import ProtectedRoute from "../../utils/ProtectedRoute";

const Navigation: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default Navigation;
