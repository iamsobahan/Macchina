import React from "react";
import logo from "../../../images/Logo-4.svg";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useHistory } from "react-router";
import useAuth from "../../../Hooks/useAuth";

const Nav = () => {
  const { user, logOut } = useAuth();
  const history = useHistory();
  const clickhandler = (route) => {
    history.push(route);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: "white", color: "black" }} position="sticky">
        <Toolbar style={{ fontWeight: "600" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logo} alt="" />
          </Typography>
          <Button onClick={() => clickhandler("/home")} color="inherit">
            Home
          </Button>
          <Button onClick={() => clickhandler("/explore")} color="inherit">
            Explore
          </Button>

          {user?.email && (
            <Button onClick={() => clickhandler("/dashboard")} color="inherit">
              Dashboard
            </Button>
          )}

          {user?.email ? (
            <Button
              style={{ fontWeight: "600" }}
              onClick={logOut}
              color="inherit"
            >
              Logout
            </Button>
          ) : (
            <Button onClick={() => clickhandler("/login")} color="inherit">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
