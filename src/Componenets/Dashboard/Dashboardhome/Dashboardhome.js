import React from "react";
import CountUp from "react-countup";
import slideOne from "../../../images/slide.jpg";
import slideTwo from "../../../images/slide1.jpg";
import slideThree from "../../../images/slide2.jpg";
import slideFour from "../../../images/slide3.jpg";
import slideFive from "../../../images/slide4.jpg";
import slideSix from "../../../images/slide5.jpg";
import slideSeven from "../../../images/slide6.jpg";
import slideEight from "../../../images/slide7.jpg";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow } from "swiper";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import counter from "../../../images/counter.jpg";

SwiperCore.use([EffectCoverflow]);

const background = {
  background: `url(${counter}) no-repeat center`,
  backgroundSize: "cover",
  padding: "15px 0",
  textAlign: "center",
  marginTop: "60px",
};

const Dashboardhome = () => {
  return (
    <Box>
      <Typography
        style={{
          textTransform: "uppercase",
          padding: "10px 0",
          textAlign: "start",
          fontWeight: "600",
          borderBottom: "1px solid lightgray",
        }}
        variant="h4"
      >
        <span style={{ color: "#BF2130" }}>Short</span> overview
      </Typography>

      <Box style={background}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <CountUp
              style={{ color: "white", fontWeight: "600", fontSize: "22px" }}
              start={0}
              end={260}
              duration={2.75}
              separator=" "
            />

            <Typography style={{ color: "white" }} variant="body1">
              Total <span style={{ color: "#BF2130" }}>Cars</span>{" "}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <CountUp
              style={{ color: "white", fontWeight: "600", fontSize: "22px" }}
              start={0}
              end={560}
              duration={2.75}
              separator=" "
            />

            <Typography style={{ color: "white" }} variant="body1">
              Dealer <span style={{ color: "#BF2130" }}>Reviews</span>{" "}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <CountUp
              style={{ color: "white", fontWeight: "600", fontSize: "22px" }}
              start={0}
              end={960}
              duration={2.75}
              separator=" "
            />

            <Typography style={{ color: "white" }} variant="body1">
              Happy <span style={{ color: "#BF2130" }}>Clients</span>{" "}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <CountUp
              style={{ color: "white", fontWeight: "600", fontSize: "22px" }}
              start={0}
              end={160}
              duration={2.75}
              separator=" "
            />

            <Typography style={{ color: "white" }} variant="body1">
              Award <span style={{ color: "#BF2130" }}>Winning</span>{" "}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Swiper
        style={{ width: "100%", marginTop: "40px" }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 80,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          loop: true,
        }}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide style={{ width: "50%" }}>
          <img style={{ width: "100%" }} src={slideEight} alt="" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "50%" }}>
          <img style={{ width: "100%" }} src={slideTwo} alt="" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "50%" }}>
          <img style={{ width: "100%" }} src={slideThree} alt="" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "50%" }}>
          <img style={{ width: "100%" }} src={slideOne} alt="" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "50%" }}>
          <img style={{ width: "100%" }} src={slideFour} alt="" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "50%" }}>
          <img style={{ width: "100%" }} src={slideFive} alt="" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "50%" }}>
          <img style={{ width: "100%" }} src={slideSix} alt="" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "50%" }}>
          <img style={{ width: "100%" }} src={slideSeven} alt="" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Dashboardhome;
