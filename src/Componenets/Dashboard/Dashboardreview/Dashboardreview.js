import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Swal from "sweetalert2";
import React, { useState } from "react";
import preview from "../../../images/preview.jpg";

const Dashboardreview = () => {
  const [rating, setrating] = useState({});

  const blurHandler = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const previusRating = { ...rating };
    previusRating[field] = value;
    setrating(previusRating);
  };

  const clickhandler = (e) => {
    fetch("https://nameless-retreat-70223.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(rating),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire(
            "Good job!",
            "Thank you for giving your feedback",
            "success"
          );
        }
      });
    e.target.reset();
    e.preventDefault();
  };
  return (
    <Box>
      <Typography
        style={{
          textTransform: "uppercase",
          padding: "20px 0",
          fontWeight: "600",
        }}
        variant="h4"
      >
        <span style={{ color: "#BF2130" }}>TELL US</span> HOW WE DID
      </Typography>
      <Typography
        style={{
          borderBottom: "1px solid lightgray",
          paddingBottom: "20px",
        }}
        variant="body1"
      >
        Gaining trust is the only way you’re going to make the sale. The more
        you help without trying to sell a product you’re going to make the sale.
        The more you help without trying to sell a product
      </Typography>

      <Grid style={{ alignItems: "center" }} container>
        <Grid item xs={12} sm={6}>
          <img style={{ width: "100%" }} src={preview} alt="" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <form onSubmit={clickhandler}>
            <Typography style={{ margin: "15px 0" }} variant="h4">
              Write Us A Review
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="name"
                  onBlur={blurHandler}
                  id="outlined-multiline-flexible"
                  label="Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="rating"
                  onBlur={blurHandler}
                  style={{ width: "100%" }}
                  id="outlined-multiline-flexible"
                  type="number"
                  label="Rating(0-5)"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  name="details"
                  onBlur={blurHandler}
                  style={{ width: "100%" }}
                  id="outlined-multiline-static"
                  label="Comment"
                  multiline
                  rows={6}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              style={{ background: "#BF2130", marginTop: "15px" }}
              variant="contained"
            >
              Add review
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboardreview;
