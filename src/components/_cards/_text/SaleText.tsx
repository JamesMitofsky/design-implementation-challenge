import { Box, Typography } from "@mui/material";
import PriceIcon from "../../../assets/PriceIcon";
import { NFTStructure } from "../../../types/NFTObjectType";

type SalePrice = NFTStructure["sale"]["unitary_price_float"];

export default function SaleText({ price }: { price: SalePrice }) {
  return (
    <Box sx={{ gridArea: "price" }}>
      {price && (
        <>
          <Typography variant="cardSubtitle">Price</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <PriceIcon marginRequiredOn="right" />
            <Typography sx={{ fontSize: 10 }}>{price.toFixed(1)}</Typography>
          </Box>
        </>
      )}
    </Box>
  );
}
