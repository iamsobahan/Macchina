import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import review from "../../../images/reviews.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";
import Review from "./Review/Review";

const Reviews = () => {
  return (
    <Box sx={{ mt: 10 }}>
      <Container>
        <Grid style={{ alignItems: "center" }} container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography
              style={{
                borderBottom: "2px solid black",
                textTransform: "uppercase",
                paddingBottom: "40px",
              }}
              variant="body1"
            >
              {" "}
              100% APPROVED reviews BY CUSTOMERS
            </Typography>
            <Typography
              style={{
                borderBottom: "2px solid black",
                textTransform: "uppercase",
                padding: "40px 0",
              }}
              variant="h3"
            >
              TELL us how we did
            </Typography>
            <Box style={{ marginTop: "30px" }}>
              <FacebookIcon
                style={{
                  border: "1px solid black",
                  padding: "5px",
                  margin: "0 30px",
                  cursor: "pointer",
                }}
              ></FacebookIcon>
              <TwitterIcon
                style={{
                  border: "1px solid black",
                  padding: "5px",
                  margin: "0 30px",
                  cursor: "pointer",
                }}
              ></TwitterIcon>
              <InstagramIcon
                style={{
                  border: "1px solid black",
                  padding: "5px",
                  margin: "0 30px",
                  cursor: "pointer",
                }}
              ></InstagramIcon>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <img style={{ width: "100%" }} src={review} alt="" />
          </Grid>
        </Grid>
        <Review></Review>
      </Container>
    </Box>
  );
};

export default Reviews;
