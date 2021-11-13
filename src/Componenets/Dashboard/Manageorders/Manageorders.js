import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Manageorder from "./Manageorder/Manageorder";
import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import Swal from "sweetalert2";

const Manageorders = () => {
  const [orders, setorders] = useState([]);

  useEffect(() => {
    fetch("https://nameless-retreat-70223.herokuapp.com/allorders")
      .then((res) => res.json())
      .then((data) => setorders(data));
  }, []);

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
        fetch(`https://nameless-retreat-70223.herokuapp.com/orders/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Good job!", "Order deleted successfully", "success");
              const remaining = orders.filter((item) => item._id !== id);
              setorders(remaining);
            }
          });
      }
    });
  };
  return (
    <Box>
      <Typography
        variant="h4"
        style={{
          textTransform: "uppercase",
          margin: "15px 0",
          padding: "10px 0",
          borderBottom: "1px solid lightgray",
        }}
      >
        {" "}
        <span style={{ color: "#BF2130" }}>Your</span> orders
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Serial</TableCell>
              <TableCell align="center">Car Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Time/Date</TableCell>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Action</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((item, index) => {
              item.serial = index + 1;
              return (
                <Manageorder
                  key={item._id}
                  item={item}
                  deleteFunc={clickhandler}
                ></Manageorder>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Manageorders;
