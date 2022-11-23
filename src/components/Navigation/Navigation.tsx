import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
// import AddTodoPage from "../../pages/AddTodoPage/AddTodoPage";
import ProtectedRoute from "../../utils/ProtectedRoute";

const Navigation = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
          {/* <Route path="/add" element={<AddTodoPage />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default Navigation;
