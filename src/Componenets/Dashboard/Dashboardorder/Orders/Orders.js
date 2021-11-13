import { TableCell, TableRow, Button } from "@mui/material";
import React from "react";

const Orders = (props) => {
  const { _id, serial, carName, email, location, quantity, date, status } =
    props.item;

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
        {status === "pending" ? (
          <Button
            style={{ background: "PURPLE" }}
            variant="contained"
            size="small"
          >
            {status}
          </Button>
        ) : (
          <Button
            style={{ background: "green" }}
            variant="contained"
            size="small"
          >
            {status}
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
};

export default Orders;
