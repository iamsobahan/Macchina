import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Box from "@mui/material/Box";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AddIcon from "@mui/icons-material/Add";
import CssBaseline from "@mui/material/CssBaseline";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import LogoutIcon from "@mui/icons-material/Logout";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PaymentsIcon from "@mui/icons-material/Payments";
import MenuIcon from "@mui/icons-material/Menu";
import RateReviewIcon from "@mui/icons-material/RateReview";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../images/Logo-4.svg";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import Dashboardhome from "./Dashboardhome/Dashboardhome";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Dashboardpay from "./Dashboardpay/Dashboardpay";
import Dashboardorder from "./Dashboardorder/Dashboardorder";
import Dashboardreview from "./Dashboardreview/Dashboardreview";
import Makeadmin from "./Makeadmin/Makeadmin";
import Manageorders from "./Manageorders/Manageorders";
import Addcars from "./Addcars/Addcars";
import Managecars from "./Managecars/Managecars";

const drawerWidth = 240;

function Dashboard(props) {
  const { logOut, user } = useAuth();
  const { window } = props;
  const [admin, setadmin] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  React.useEffect(() => {
    fetch(`https://nameless-retreat-70223.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setadmin(data.admin));
  }, [user.email]);

  const date = new Date().toLocaleDateString();

  const drawer = (
    <div>
      <Toolbar>
        <img src={logo} alt="" />
      </Toolbar>
      <Divider />
      <List>
        <Link to="/home">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </Link>
        <Link to={`${url}`}>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText>Dashboard</ListItemText>
          </ListItem>
        </Link>

        {admin ? (
          <Box>
            <Link to={`${url}/manageorders`}>
              <ListItem button>
                <ListItemIcon>
                  <ManageSearchIcon />
                </ListItemIcon>
                <ListItemText>Manage All Orders</ListItemText>
              </ListItem>
            </Link>
            <Link to={`${url}/addcar`}>
              <ListItem button>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText>Add New Car</ListItemText>
              </ListItem>
            </Link>

            <Link to={`${url}/makeadmin`}>
              <ListItem button>
                <ListItemIcon>
                  <AdminPanelSettingsIcon />
                </ListItemIcon>
                <ListItemText>Make a admin</ListItemText>
              </ListItem>
            </Link>
            <Link to={`${url}/managecars`}>
              <ListItem button>
                <ListItemIcon>
                  <ManageAccountsIcon />
                </ListItemIcon>
                <ListItemText>Manage Cars</ListItemText>
              </ListItem>
            </Link>
          </Box>
        ) : (
          <Box>
            <Link to={`${url}/pay`}>
              <ListItem button>
                <ListItemIcon>
                  <PaymentsIcon />
                </ListItemIcon>
                <ListItemText>Pay</ListItemText>
              </ListItem>
            </Link>
            <Link to={`${url}/orders`}>
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText>My Orders</ListItemText>
              </ListItem>
            </Link>
            <Link to={`${url}/review`}>
              <ListItem button>
                <ListItemIcon>
                  <RateReviewIcon />
                </ListItemIcon>
                <ListItemText>Review</ListItemText>
              </ListItem>
            </Link>
          </Box>
        )}

        <Link to="/home">
          <ListItem onClick={logOut} button>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </ListItem>
        </Link>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{ background: "#BF2130" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          <Typography
            style={{ marginLeft: "auto" }}
            variant="body1"
            noWrap
            component="div"
          >
            {date}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={path}>
            <Dashboardhome></Dashboardhome>
          </Route>
          <Route path={`${path}/pay`}>
            <Dashboardpay></Dashboardpay>
          </Route>
          <Route path={`${path}/orders`}>
            <Dashboardorder></Dashboardorder>
          </Route>
          <Route path={`${path}/review`}>
            <Dashboardreview></Dashboardreview>
          </Route>
          <Route path={`${path}/makeadmin`}>
            <Makeadmin></Makeadmin>
          </Route>
          <Route path={`${path}/manageorders`}>
            <Manageorders></Manageorders>
          </Route>
          <Route path={`${path}/addcar`}>
            <Addcars></Addcars>
          </Route>
          <Route path={`${path}/managecars`}>
            <Managecars></Managecars>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
