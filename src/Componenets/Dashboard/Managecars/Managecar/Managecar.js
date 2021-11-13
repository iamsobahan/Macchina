import { Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Managecar = (props) => {
  const { _id, name, location, price, details, condition, img } = props.item;

  return (
    <Grid item xs={12} sm={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" alt="green iguana" image={img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography
            style={{ color: "#BF2130", borderBottom: "1px dotted #BF2130" }}
            gutterBottom
            variant="h6"
            component="div"
          >
            ${price}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            Location: {location}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            Condition: {condition}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {details}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => props.deleteFunc(_id)}
            style={{ backgroundColor: "#BF2130" }}
            variant="contained"
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Managecar;
