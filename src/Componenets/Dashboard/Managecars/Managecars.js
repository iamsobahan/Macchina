import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import useCars from "../../../Hooks/useCars";
import Managecar from "./Managecar/Managecar";
import Swal from "sweetalert2";

const Managecars = () => {
  const { cars, setcars } = useCars();

  const clickhandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#BF2130",
      cancelButtonColor: "green",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://nameless-retreat-70223.herokuapp.com/car/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Good job!", "Order deleted successfully", "success");
              const remaining = cars.filter((item) => item._id !== id);
              setcars(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <Box>
        <Container>
          <Typography
            style={{
              textTransform: "uppercase",
              padding: "20px 0",
              borderBottom: "1px solid lightgray",
              fontWeight: "600",
            }}
            variant="h4"
          >
            <span style={{ color: "#BF2130" }}>Manage</span> your cars
          </Typography>

          <Grid style={{ marginTop: "30px" }} container spacing={2}>
            {cars.map((item) => (
              <Managecar
                key={item._id}
                item={item}
                deleteFunc={clickhandler}
              ></Managecar>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Managecars;
