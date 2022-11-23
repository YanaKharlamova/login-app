import React, { useState, useEffect, ReactNode } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import FaceIcon from "@mui/icons-material/Face";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")|| '{}').email
    : null;

  const userPassword = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")|| '{}').password
    : null;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("email", email);
    console.log("userEmail", userEmail);
    if (email === userEmail && password === userPassword) {
      localStorage.setItem("isAuth", JSON.stringify(true));
      toast.success("Login Success");
      navigate("/profile");
    } else {
      console.log("Login Failure");
      toast.error("Invalid Email OR password");
    }
  };

  const paperStyle = {
    padding: "5rem",
    height: "70vh",
    width: 400,
    margin: "2rem auto",
    fontSize: "2rem",
  };
  const avatarStyle = {
    backgroundColor: "pink",
    fontSize: "10rem",
    color: "blue",
  };
  const btnstyle = { margin: "0.5rem 0" };

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          {/* <Grid align="center">
            <Avatar style={avatarStyle}>
              <FaceIcon fontSize="large" />
            </Avatar>
            <h2>Sign In</h2>
          </Grid> */}
          <TextField
            label="Email"
            placeholder="Enter email"
            fullWidth
            required
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value)
            }
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(event.target.value)
            }
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Sign in
          </Button>
          <Typography>
            Don`t have an account ?<Link to="/register">Register</Link>
          </Typography>
        </Paper>
      </Grid>
    </form>
  );
};

export default Login;
