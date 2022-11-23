import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
} from "@material-ui/core";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };

  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    id: Math.random(),
  });

  const saveUserToLocalStorage = () => {
    localStorage.setItem("user", JSON.stringify(user));
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (user.name === "") {
      toast.error("Name Is Required");
    } else if (user.email === "") {
      toast.error("Email Is Required");
    } else if (user.password === "") {
      toast.error("Password is Required");
    } else if (user.phoneNumber === "") {
      toast.error("Number is Required");
    } else {
      saveUserToLocalStorage();
      toast.success("User Saved!");
      navigate("/");
    }
  };

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        {/* <Grid align="center">
          <Avatar style={avatarStyle}>
            <AccountCircleIcon fontSize="large" />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
        </Grid> */}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            placeholder="Enter your name"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setUser({ ...user, name: event.target.value })
            }
          />
          <TextField
            fullWidth
            label="Email"
            placeholder="Enter your email"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setUser({ ...user, email: event.target.value })
            }
          />
          <FormControl component="fieldset" style={marginTop}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              style={{ display: "initial" }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <TextField
            fullWidth
            label="Phone Number"
            placeholder="Enter your phone number"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setUser({ ...user, phoneNumber: event.target.value })
            }
          />
          <TextField
            fullWidth
            label="Password"
            placeholder="Enter your password"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setUser({ ...user, password: event.target.value })
            }
          />
          <TextField
            fullWidth
            label="Confirm Password"
            placeholder="Confirm your password"
          />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions."
          />
          <Button
            style={{ display: "block", margin: "0 auto" }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default RegisterForm;
