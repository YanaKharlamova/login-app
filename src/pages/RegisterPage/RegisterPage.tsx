import React from "react";
import { Typography, Box } from "@material-ui/core";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPage: React.FC = () => {
  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     m: 4,
    //   }}
    // >
    //   <Typography
    //     style={{
    //       fontSize: "2rem",
    //       fontWeight: "bold",
    //       color: "rgb(229,119,201)",
    //     }}
    //     variant="h1"
    //     gutterBottom
    //   >
    //     Please fill this form to create an account !
    //   </Typography>
    <RegisterForm />
    // </Box>
  );
};

export default RegisterPage;
