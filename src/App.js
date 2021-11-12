import "./App.css";
import Nav from "./Componenets/Home/Nav/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Componenets/Home/Home/Home";
import Placeorder from "./Componenets/Placeorder/Placeorder";
import Explore from "./Componenets/Explore/Explore";
import Login from "./Componenets/Login/Login";
import Authprovider from "./Componenets/Authprovider/Authprovider";
import Privateroute from "./Componenets/Privateroute/Privateroute";
import Register from "./Componenets/Register/Register";
import Dashboard from "./Componenets/Dashboard/Dashboard";

function App() {
  return (
    <Authprovider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Privateroute path="/cars/:id">
            <Placeorder></Placeorder>
          </Privateroute>
          <Privateroute path="/explore">
            <Explore></Explore>
          </Privateroute>
          <Privateroute path="/dashboard">
            <Dashboard></Dashboard>
          </Privateroute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </BrowserRouter>
    </Authprovider>
  );
}

export default App;
