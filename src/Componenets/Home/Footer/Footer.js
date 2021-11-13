import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import footerImg from "../../../images/footer.jpg";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";
import footer from "../../../images/Logo-4.svg";
import "./footer.css";

const Footer = () => {
  return (
    <Box
      style={{
        backgroundColor: "black",
        marginTop: "60px",
        paddingTop: "20px",
      }}
    >
      <Container>
        <img src={footer} alt="" />
        <Grid
          style={{ alignItems: "center", marginTop: "20px" }}
          container
          spacing={2}
        >
          <Grid item xs={12} sm={8}>
            <Typography
              style={{ textTransform: "uppercase", color: "#BF2130" }}
              variant="body2"
            >
              <CarRepairIcon></CarRepairIcon>
              car salling and maintanance
            </Typography>
            <Typography
              style={{ color: "white", fontWeight: "600" }}
              variant="h3"
            >
              CALL US NOW 715-387-50
            </Typography>

            <Grid
              style={{
                color: "white",
                alignItems: "center",
                marginTop: "30px",
                borderTop: "1px solid lightgray",
                paddingTop: "30px",
              }}
              container
              spacing={2}
            >
              <Grid item xs={12} sm={4}>
                NEW YORK, 1286 RUUMU MANOR GET DIRECTION
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box style={{ marginTop: "30px" }}>
                  <FacebookIcon
                    style={{
                      border: "1px solid white",
                      padding: "5px",
                      margin: "0 20px",
                      cursor: "pointer",
                    }}
                  ></FacebookIcon>
                  <TwitterIcon
                    style={{
                      border: "1px solid white",
                      padding: "5px",
                      margin: "0 20px",
                      cursor: "pointer",
                    }}
                  ></TwitterIcon>
                  <InstagramIcon
                    style={{
                      border: "1px solid white",
                      padding: "5px",
                      margin: "0 20px",
                      cursor: "pointer",
                    }}
                  ></InstagramIcon>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                MON – FRI: 8:30 AM – 6:00 PM SAT: 8:30 AM – 2:00 PM
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img style={{ width: "100%" }} src={footerImg} alt="" />
          </Grid>
        </Grid>
      </Container>
      <Box style={{ padding: "10px 0", textAlign: "center", color: "white" }}>
        <Typography>© 2021 AUTO-SERVICE THEME BY AMAR THEMES</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
