import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import ReviewItem from "./ReviewItem/ReviewItem";

const Review = () => {
  const [review, setreview] = useState([]);
  useEffect(() => {
    fetch("https://nameless-retreat-70223.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setreview(data));
  }, []);
  return (
    <Box sx={{ mt: 5 }}>
      <Typography
        style={{
          textTransform: "uppercase",
          padding: "20px 0",
          borderBottom: "1px solid lightgray",
          fontWeight: "600",
        }}
        variant="h4"
      >
        <span style={{ color: "#BF2130" }}>Recent</span> reviews
      </Typography>
      <Grid sx={{ mt: 4 }} container spacing={2}>
        {review.map((item) => (
          <ReviewItem key={item._id} item={item}></ReviewItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Review;
