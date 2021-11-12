import React from "react";
import { Grid, Paper, Rating } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Typography } from "@mui/material";

const ReviewItem = (props) => {
  const { name, rating, details } = props.item;
  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <Paper style={{ padding: "20px" }} variant="outlined" square>
        <FormatQuoteIcon style={{ fontSize: "50px" }}></FormatQuoteIcon>
        <Typography
          style={{ borderBottom: "1px solid #BF2130", paddingBottom: "20px" }}
          variant="body2"
        >
          {" "}
          "{details}"
        </Typography>
        <Typography style={{ paddingTop: "20px" }} variant="h5">
          {name}
        </Typography>
        <Rating
          style={{ color: "#BF2130" }}
          name="read-only"
          value={parseInt(rating, 10)}
          readOnly
        />
      </Paper>
    </Grid>
  );
};

export default ReviewItem;
