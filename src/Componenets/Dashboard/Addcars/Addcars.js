import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Swal from "sweetalert2";
import car from "../../../images/addcar.jpg";

const Addcars = () => {
  const [info, setinfo] = useState({});

  const blurhandler = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const previusInfo = { ...info };
    previusInfo[field] = value;
    setinfo(previusInfo);
  };

  const clickhandler = (e) => {
    fetch("https://nameless-retreat-70223.herokuapp.com/cars", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Good job!", "Your Car Added successfully", "success");
        }
      });
    e.target.reset();
    e.preventDefault();
  };
  return (
    <Box style={{ margin: "15px 0" }}>
      <Typography
        style={{
          margin: "15px 0",
          textTransform: "uppercase",
          fontWeight: "600",
        }}
        variant="h4"
      >
        <span style={{ color: "#BF2130" }}> Add</span> new car Info
      </Typography>

      <Grid style={{ alignItems: "center" }} container>
        <Grid item xs={12} md={7}>
          <img src={car} style={{ width: "100%" }} alt="" />
        </Grid>
        <Grid item xs={12} md={5}>
          <form onSubmit={clickhandler}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-basic"
                  label="Car Name"
                  variant="outlined"
                  onBlur={blurhandler}
                  name="name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-basic"
                  label="Image url"
                  variant="outlined"
                  onBlur={blurhandler}
                  name="img"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Price"
                  type="number"
                  id="outlined-size-small"
                  size="small"
                  onBlur={blurhandler}
                  name="price"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Location"
                  id="outlined-size-small"
                  size="small"
                  onBlur={blurhandler}
                  name="location"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Condition"
                  id="outlined-size-small"
                  size="small"
                  onBlur={blurhandler}
                  name="condition"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-multiline-static"
                  label="Details"
                  multiline
                  rows={4}
                  onBlur={blurhandler}
                  name="details"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              style={{ margin: "20px 0", background: "#BF2130" }}
              variant="contained"
            >
              Add Car
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Addcars;
