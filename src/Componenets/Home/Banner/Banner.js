import { Container, Typography, Button } from "@mui/material";
import React from "react";
import bannerImg from "../../../images/banner.jpg";

const Banner = () => {
  const banner = {
    background: `url(${bannerImg}) center no-repeat`,
    backgroundSize: "cover",
    padding: "100px 0 160px 0",
  };

  return (
    <div style={banner}>
      <Container>
        <Typography
          style={{ textTransform: "uppercase", fontWeight: "800" }}
          variant="h2"
        >
          Just one More car
        </Typography>
        <Typography
          style={{
            textTransform: "uppercase",
            fontWeight: "700",
            margin: "10px 0",
          }}
          variant="h5"
        >
          You can control where you go next
        </Typography>
        <Typography sx={{ width: "50%", fontWeight: "500" }} variant="body1">
          The famous sales guru, Zig Ziglar, always makes good points. The idea
          of “selling” is counter-intuitive to what it takes to gain trust with
          a client. Gaining trust is the only way you’re going to make the sale.
          The more you help without trying to sell a product
        </Typography>
        <Button
          style={{
            backgroundColor: "#BF2130",
            marginTop: "15px",
            color: "black",
            fontWeight: "600",
          }}
          variant="contained"
        >
          Know More
        </Button>
      </Container>
    </div>
  );
};

export default Banner;
