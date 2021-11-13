import {
  Container,
  Grid,
  TextField,
  Typography,
  TextareaAutosize,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import Swal from "sweetalert2";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import Footer from "../../Componenets/Home/Footer/Footer";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Nav from "../Home/Nav/Nav";
import "./Placeorder.css";
import useAuth from "../../Hooks/useAuth";

const Placeorder = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [carInfo, setcarInfo] = useState({});
  const [info, setInfo] = useState({});

  const emailRef = useRef();

  useEffect(() => {
    fetch(`https://nameless-retreat-70223.herokuapp.com/car/${id}`)
      .then((res) => res.json())
      .then((data) => setcarInfo(data));
  }, [id]);

  const blurhandler = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...info };
    newInfo[field] = value;
    setInfo(newInfo);
  };

  const clickhandler = (e) => {
    const email = emailRef.current.value;
    const orderInfo = {
      ...info,
      email: email,
      productId: id,
      carName: carInfo.name,
      date: new Date().toLocaleString(),
    };

    fetch("https://nameless-retreat-70223.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire(
            "Good job!",
            "Your order Submitted successfully",
            "success"
          );
        }
      });
    e.target.reset();
    e.preventDefault();
  };

  return (
    <div>
      <Nav></Nav>

      <Box style={{ margin: "60px 0" }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box className="img">
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  src={carInfo.img}
                  alt=""
                />
                <div className="overlay">
                  <div>
                    <Typography variant="h6">{carInfo?.name}</Typography>
                    <Typography variant="body1">{carInfo?.location}</Typography>
                    <Box style={{ marginTop: "20px" }}>
                      <FacebookIcon
                        style={{
                          border: "1px solid white",
                          padding: "5px",
                          margin: "0 10px",
                          cursor: "pointer",
                        }}
                      ></FacebookIcon>
                      <TwitterIcon
                        style={{
                          border: "1px solid white",
                          padding: "5px",
                          margin: "0 10px",
                          cursor: "pointer",
                        }}
                      ></TwitterIcon>
                      <InstagramIcon
                        style={{
                          border: "1px solid white",
                          padding: "5px",
                          margin: "0 10px",
                          cursor: "pointer",
                        }}
                      ></InstagramIcon>
                    </Box>
                  </div>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <form onSubmit={clickhandler}>
                <Typography
                  style={{ textTransform: "uppercase", marginBottom: "10px" }}
                  variant="h4"
                >
                  Place your order
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      sx={{ width: "100%" }}
                      id="standard-basic"
                      label="Name"
                      variant="standard"
                      onBlur={blurhandler}
                      name="name"
                      defaultValue={user?.displayName ? user?.displayName : ""}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      sx={{ width: "100%" }}
                      id="standard-basic"
                      label="Email"
                      variant="standard"
                      inputRef={emailRef}
                      defaultValue={user?.email}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      sx={{ width: "100%" }}
                      id="standard-basic"
                      label="Phone Number"
                      variant="standard"
                      onBlur={blurhandler}
                      name="phone"
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      sx={{ width: "100%" }}
                      label="Location"
                      variant="standard"
                      onBlur={blurhandler}
                      name="location"
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      sx={{ width: "100%" }}
                      id="standard-basic"
                      label="Quantity"
                      type="number"
                      variant="standard"
                      onBlur={blurhandler}
                      name="quantity"
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextareaAutosize
                      style={{
                        width: "100%",
                        padding: "10px",
                        marginTop: "5px",
                        resize: "none",
                      }}
                      aria-label="minimum height"
                      minRows={4}
                      placeholder="Comment"
                      onBlur={blurhandler}
                      name="comment"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  style={{ backgroundColor: "#BF2130", marginTop: "10px" }}
                  variant="contained"
                >
                  Placeorder
                </Button>
              </form>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default Placeorder;
