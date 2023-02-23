import { NFTStructure } from "../../types/NFTObjectType";
import { CardContent, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

export default function CardText({ name, sale, collection }: NFTStructure) {
  const cardTypeDependantColor =
    collection.kind === "erc1155" ? "#44474d" : "secondary.main";

  return (
    <CardContent
      sx={{
        height: "100%",
        borderWidth: "0 .05rem .05rem .05rem",
        borderBottomRightRadius: ".7rem",
        borderBottomLeftRadius: ".7rem",
        borderStyle: "solid",
        borderColor: cardTypeDependantColor,
      }}
    >
      <Grid2 container height="100%">
        <Grid2 xs={12}>
          <Typography variant="cardTitle">{name}</Typography>
        </Grid2>
        <Grid2 xs={6}>
          <Typography variant="cardSubtitle">Price</Typography>
          <Typography sx={{ fontSize: 10 }}>
            {sale?.unitary_price_float.toFixed(1)}
          </Typography>
        </Grid2>
        <Grid2 xs={6}>
          <Typography variant="cardSubtitle">Best Offer</Typography>
        </Grid2>
      </Grid2>
    </CardContent>
  );
}
