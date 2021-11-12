import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import about from "../../../../images/about.jpg";
import aboutIcon from "../../../../images/aboutIcon.svg";
import aboutIcon2 from "../../../../images/aboutIcon2.svg";
import aboutIcon3 from "../../../../images/aboutIcon3.svg";

const img = {
  borderRadius: "50%",
  border: "1px solid black",
  width: "80px",
  height: "80px",
  padding: "20px",
  margin: "0 10px",
};

const AboutGrid = () => {
  return (
    <Box style={{ marginTop: "60px" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography
              style={{
                borderBottom: "2px solid black",
                textTransform: "uppercase",
                paddingBottom: "30px",
              }}
              variant="body1"
            >
              {" "}
              we are certificated
            </Typography>
            <Typography
              style={{
                borderBottom: "2px solid black",
                textTransform: "uppercase",
                padding: "30px 0",
              }}
              variant="h3"
            >
              WE ARE A CERTIFIED NY SAFETY INSPECTION CENTER
            </Typography>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
              }}
            >
              <img style={img} src={aboutIcon} alt="" />
              <img style={img} src={aboutIcon2} alt="" />
              <img style={img} src={aboutIcon3} alt="" />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={about}
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutGrid;
