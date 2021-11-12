import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import loginImg from "../../images/login.jpg";
import Nav from "../Home/Nav/Nav";

const Register = () => {
  const [data, setdata] = useState({});
  const { createRegister, loading, user, usererror } = useAuth();

  const history = useHistory();
  const changehandler = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const previusData = { ...data };
    previusData[field] = value;
    setdata(previusData);
  };
  const clickhandler = (e) => {
    if (data.password !== data.confirmPassword) {
      alert("Your does not match");
    }

    createRegister(data.email, data.password, data.userName, history);

    e.target.reset();
    e.preventDefault();
  };
  return (
    <div>
      <Nav></Nav>
      <Box>
        <Container>
          <Grid
            style={{ alignItems: "center", justifyContent: "space-between" }}
            container
            spacing={2}
          >
            <Grid item xs={12} sm={7}>
              <img style={{ width: "100%" }} src={loginImg} alt="" />
            </Grid>
            <Grid item xs={12} md={5}>
              {!loading && (
                <>
                  {" "}
                  <Typography
                    style={{
                      color: "lightgray",
                      textTransform: "uppercase",
                      marginLeft: "100px",
                    }}
                    variant="h4"
                  >
                    Register
                  </Typography>
                  <form onSubmit={clickhandler}>
                    <TextField
                      sx={{ width: "75%", my: 2 }}
                      id="standard-name"
                      label="Your Name"
                      name="userName"
                      variant="standard"
                      onBlur={changehandler}
                    />
                    <TextField
                      sx={{ width: "75%", my: 2 }}
                      id="standard-email"
                      label="Email"
                      name="email"
                      variant="standard"
                      onBlur={changehandler}
                    />
                    <TextField
                      sx={{ width: "75%", my: 2 }}
                      id="standard-pass"
                      label="Password"
                      name="password"
                      type="password"
                      variant="standard"
                      onBlur={changehandler}
                    />
                    <TextField
                      sx={{ width: "75%", my: 2 }}
                      id="standard-confirmPass"
                      label="Confirm password"
                      name="confirmPassword"
                      type="password"
                      variant="standard"
                      onBlur={changehandler}
                    />
                    <Button
                      style={{ background: "#BF2130" }}
                      type="submit"
                      sx={{ width: "75%", mt: 2 }}
                      variant="contained"
                    >
                      Register
                    </Button>

                    <Typography style={{ marginTop: "20px" }}>
                      Already User ?
                      <Link to="/login">
                        <Button variant="text">Login</Button>
                      </Link>
                    </Typography>
                  </form>
                </>
              )}

              {user.email && (
                <Alert severity="success">
                  user created successfully — check it out!
                </Alert>
              )}

              {usererror && <Alert severity="error">{usererror}</Alert>}

              {loading && (
                <Box style={{ textAlign: "center" }}>
                  <CircularProgress />
                </Box>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Register;
