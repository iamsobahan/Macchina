import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

import Car from "./Car/Car";
import useCars from "./../../../Hooks/useCars";

const HomeCars = () => {
  const { cars } = useCars();

  return (
    <Box style={{ marginTop: "80px" }}>
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
          <span style={{ color: "#BF2130" }}>Our</span> Recent cars
        </Typography>
        <Grid style={{ marginTop: "30px" }} container spacing={2}>
          {cars.slice(0, 6).map((item) => (
            <Car key={item._id} item={item}></Car>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeCars;
