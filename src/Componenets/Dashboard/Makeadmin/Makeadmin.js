import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef } from "react";
import Swal from "sweetalert2";

const Makeadmin = () => {
  const emailRef = useRef();

  const clickhandler = (e) => {
    const email = emailRef.current.value;
    const admin = {
      email,
    };

    fetch("https://nameless-retreat-70223.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(admin),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Good job!", "Created Admin Successfully", "success");
        }
      });
    e.target.reset();
    e.preventDefault();
  };
  return (
    <Box style={{ marginTop: "30px" }}>
      <Typography
        style={{ margin: "20px 0", textAlign: "center" }}
        variant="h4"
      >
        {" "}
        Make <span style={{ color: "#BF2130" }}>Admin</span>{" "}
        <form style={{ marginTop: "20px" }} onSubmit={clickhandler}>
          <TextField
            inputRef={emailRef}
            id="standard-basic"
            label="Email"
            variant="standard"
          />
          <Button
            type="submit"
            style={{ background: "#BF2130" }}
            variant="contained"
          >
            Add admin
          </Button>
        </form>
      </Typography>
    </Box>
  );
};

export default Makeadmin;
