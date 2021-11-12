import React from "react";
import { Redirect, Route } from "react-router-dom";

import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import useAuth from "../../Hooks/useAuth";

const Privateroute = ({ children, ...rest }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <Box style={{ textAlign: "center", marginTop: "100px" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default Privateroute;
