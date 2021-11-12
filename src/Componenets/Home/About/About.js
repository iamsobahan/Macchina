import { Container, Typography } from "@mui/material";
import React from "react";
import AboutGrid from "./AboutGrid/AboutGrid";

const About = () => {
  return (
    <div style={{ marginTop: "60px" }}>
      <Container>
        <Typography
          style={{
            textTransform: "uppercase",
            textAlign: "center",
            fontWeight: "600",
          }}
          variant="h4"
        >
          WE UNDERSTAND HOW IMPORTANT IT IS <br /> TO FIND THE RIGHT Car
        </Typography>

        <Typography
          style={{ margin: "20px auto", textAlign: "center", width: "50%" }}
          variant="body1"
        >
          Car repairs and maintenance can be expensive and no one wants to have
          pay to repair damage caused by shoddy repair service.one wants to have
          pay to repair damage caused by shoddy repair service.
        </Typography>

        <AboutGrid></AboutGrid>
      </Container>
    </div>
  );
};

export default About;
