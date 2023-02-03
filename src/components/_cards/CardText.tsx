import { NFTStructure } from "../../types/NFTObjectType";
import { CardContent, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

export default function CardText(props: NFTStructure) {
  return (
    <CardContent>
      <Grid2 container>
        <Grid2 xs={12}>
          <Typography sx={{ fontSize: 10 }} component="h2">
            {props.name}
          </Typography>
        </Grid2>
        <Grid2 xs={6}>
          <Typography variant="subtitle1" component="div">
            Price
          </Typography>
          <Typography sx={{ fontSize: 10 }}>
            {props?.sale?.unitary_price_float.toFixed(1)}
          </Typography>
        </Grid2>
        <Grid2 xs={6}>
          <Typography variant="subtitle1">Best Offer</Typography>
        </Grid2>
      </Grid2>
    </CardContent>
  );
}
