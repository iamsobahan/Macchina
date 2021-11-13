import React from "react";
import logo from "../../../images/Logo-4.svg";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

import { useHistory } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const Nav = () => {
  const { user, logOut } = useAuth();
  const history = useHistory();

  const theme = useTheme();

  const useStyles = makeStyles({
    navIcon: {
      [theme.breakpoints.up("sm")]: {
        display: "none !important",
      },
    },

    navContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "none !important",
      },
    },

    navLogo: {
      [theme.breakpoints.down("sm")]: {
        marginLeft: "auto !important",
      },
    },
  });

  const { navIcon, navContainer, navLogo } = useStyles();

  const [state, setState] = React.useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          style={{ background: "white", color: "black" }}
          position="sticky"
        >
          <Toolbar style={{ fontWeight: "600" }}>
            <IconButton
              className={navIcon}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setState(true)}
            >
              <MenuIcon />
            </IconButton>
            <Link className={navLogo} to="/home">
              <img src={logo} alt="" />
            </Link>

            <Box className={navContainer} style={{ marginLeft: "auto" }}>
              <Link to="/home">
                <Button color="inherit">Home</Button>
              </Link>
              <Link to="/explore">
                <Button color="inherit">Explore</Button>
              </Link>

              {user?.email && (
                <Link to="/dashboard">
                  <Button color="inherit">Dashboard</Button>
                </Link>
              )}

              {user?.email ? (
                <Link to="/home">
                  <Button
                    style={{ fontWeight: "600" }}
                    onClick={logOut}
                    color="inherit"
                  >
                    Logout
                  </Button>
                </Link>
              ) : (
                <Link to="/login">
                  <Button color="inherit">Login</Button>
                </Link>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <React.Fragment>
          <Drawer open={state} onClose={() => setState(false)}>
            <Box sx={{ width: 180 }} role="presentation">
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <Link to="/home">
                    <ListItemText>Home</ListItemText>
                  </Link>
                </ListItem>

                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <Link to="/explore">
                    <ListItemText>Explore</ListItemText>
                  </Link>
                </ListItem>
                {user?.email && (
                  <ListItem button>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <Link to="/dashboard">
                      <ListItemText>Dashboard</ListItemText>
                    </Link>
                  </ListItem>
                )}

                {user?.email ? (
                  <ListItem button>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <Link onClick={logOut} to="/">
                      <ListItemText>LogOut</ListItemText>
                    </Link>
                  </ListItem>
                ) : (
                  <ListItem button>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <Link to="/login">
                      <ListItemText>Login</ListItemText>
                    </Link>
                  </ListItem>
                )}
              </List>
            </Box>
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
};

export default Nav;
