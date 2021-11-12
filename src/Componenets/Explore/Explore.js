import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Car from "../Home/homeCars/Car/Car";
import Nav from "../Home/Nav/Nav";
import useCars from "./../../Hooks/useCars";
import { Box } from "@mui/system";
import Footer from "./../Home/Footer/Footer";

const Explore = () => {
  const { cars } = useCars();
  return (
    <div>
      <Nav></Nav>
      <Box style={{ marginTop: "60px" }}>
        <Container>
          <Typography
            style={{
              textTransform: "uppercase",
              padding: "20px 0",
              textAlign: "center",
              fontWeight: "600",
            }}
            variant="h4"
          >
            <span style={{ color: "#BF2130" }}>Explore</span> us
          </Typography>
          <Typography
            style={{
              borderBottom: "1px solid lightgray",
              paddingBottom: "20px",
              textAlign: "center",
            }}
            variant="body1"
          >
            Gaining trust is the only way you’re going to make the sale. The
            more you help without trying to sell a product you’re going to make
            the sale. The more you help without trying to sell a product
          </Typography>
          <Grid style={{ marginTop: "30px" }} container spacing={2}>
            {cars.map((item) => (
              <Car key={item._id} item={item}></Car>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default Explore;
