import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import { Box } from "@mui/system";
import loginImg from "../../images/login.jpg";
import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

import GoogleIcon from "@mui/icons-material/Google";

import Nav from "../Home/Nav/Nav";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const location = useLocation();
  const history = useHistory();

  const [data, setdata] = useState({});
  const { user, loading, createLogin, usererror, signInWithGoogle } = useAuth();

  const changehandler = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const previusData = { ...data };
    previusData[field] = value;
    setdata(previusData);
  };
  const clickhandler = (e) => {
    createLogin(data.email, data.password, location, history);
    e.target.reset();
    e.preventDefault();
  };
  return (
    <div>
      <Nav></Nav>
      <Box>
        <Container>
          <Grid style={{ alignItems: "center" }} container spacing={2}>
            <Grid item xs={12} sm={7}>
              <img style={{ width: "100%" }} src={loginImg} alt="" />
            </Grid>
            <Grid item xs={12} sm={5}>
              {!loading && (
                <>
                  <Typography
                    style={{
                      color: "lightgray",
                      textTransform: "uppercase",
                      marginLeft: "100px",
                    }}
                    variant="h4"
                  >
                    Login
                  </Typography>

                  <form onSubmit={clickhandler}>
                    <TextField
                      sx={{ width: "75%", my: 2 }}
                      id="standard-basic"
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
                    <Button
                      style={{ background: "#BF2130" }}
                      type="submit"
                      sx={{ width: "75%", mt: 2 }}
                      variant="contained"
                    >
                      Login
                    </Button>

                    <Typography style={{ marginTop: "20px" }}>
                      New user ?
                      <Link to="/register">
                        <Button variant="text">Register</Button>
                      </Link>
                    </Typography>

                    <Typography style={{ marginLeft: "150px" }}>
                      ------------ or-----------
                    </Typography>
                    <Button
                      style={{ background: "#BF2130" }}
                      onClick={() => signInWithGoogle(location, history)}
                      sx={{ width: "75%", mt: 2 }}
                      variant="contained"
                    >
                      <GoogleIcon style={{ fontSize: "30px" }}></GoogleIcon>
                    </Button>
                  </form>
                </>
              )}
              {loading && (
                <Box style={{ textAlign: "center" }}>
                  <CircularProgress />
                </Box>
              )}

              {user.email && (
                <Alert severity="success">
                  user Login successfully — check it out!
                </Alert>
              )}

              {usererror && <Alert severity="error">{usererror}</Alert>}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Login;
