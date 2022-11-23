import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        m: 3,
      }}
    >
      <Typography
        style={{ fontSize: "3rem", fontWeight: "bold", color: "rgb(61,79,178)" }}
        variant="h1"
        gutterBottom
      >
        Login to create todo list
      </Typography>
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
