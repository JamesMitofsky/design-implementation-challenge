import { Box, Typography } from "@mui/material";
import PriceIcon from "../../../assets/PriceIcon";
import { NFTStructure } from "../../../types/NFTObjectType";
import BuyNowButton from "../../BuyNowButton";

type OfferPrice = NFTStructure["offer"]["unitary_price_float"];

export default function OfferText({
  price,
  hovered,
}: {
  price: OfferPrice;
  hovered: boolean;
}) {
  return (
    <Box
      sx={{
        gridArea: "bestOffer",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        height: "100%",
      }}
    >
      {hovered && <BuyNowButton />}
      {!hovered && price && (
        <>
          <Typography variant="cardSubtitle">Best Offer</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: 13 }}>{price.toFixed(2)}</Typography>
            <PriceIcon bestOffer={true} marginRequiredOn="left" />
          </Box>
        </>
      )}
    </Box>
  );
}
