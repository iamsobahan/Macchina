import React from "react";
import { TableCell, TableRow, Button } from "@mui/material";
import Swal from "sweetalert2";

const Manageorder = (props) => {
  const { _id, serial, carName, email, location, quantity, date, status } =
    props.item;

  const clickhandler = (id) => {
    fetch(`https://nameless-retreat-70223.herokuapp.com/allorders/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount > 0) {
          Swal.fire("Good job!", "Updated order successfully", "success");
        }
      });
  };
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {serial}
      </TableCell>
      <TableCell align="center">{carName}</TableCell>
      <TableCell align="center">{email}</TableCell>
      <TableCell align="center">{date}</TableCell>
      <TableCell align="center">{location}</TableCell>
      <TableCell align="center">{quantity}</TableCell>

      <TableCell align="center">
        {" "}
        <Button
          onClick={() => props.deleteFunc(_id)}
          style={{ background: "#BF2130" }}
          variant="contained"
          size="small"
        >
          Delete
        </Button>
      </TableCell>
      <TableCell align="center">
        {" "}
        <Button
          onClick={() => clickhandler(_id)}
          style={{ background: "green" }}
          variant="contained"
          size="small"
        >
          {status}
        </Button>{" "}
      </TableCell>
    </TableRow>
  );
};

export default Manageorder;
