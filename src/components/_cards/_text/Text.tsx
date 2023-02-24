import { CardContent, Typography, Box } from "@mui/material";
import { NFTStructure } from "../../../types/NFTObjectType";
import PriceIcon from "../../../assets/PriceIcon";
import OfferText from "./OfferPurchaseText";
import SaleText from "./SaleText";

type NftProps = Pick<NFTStructure, "name" | "sale" | "collection" | "offer">;

interface Props extends NftProps {
  hovered: boolean;
}

export default function CardText({
  name,
  sale,
  collection,
  offer,
  hovered,
}: Props) {
  // cards which will have the stacked effect also have a glowing border
  const cardTypeDependantColor =
    collection.kind === "erc1155" ? "#44474d" : "secondary.main";

  return (
    <Box
      sx={{
        height: "100%",
        borderWidth: "0 .05rem .05rem .05rem",
        borderBottomRightRadius: ".7rem",
        borderBottomLeftRadius: ".7rem",
        borderStyle: "solid",
        borderColor: cardTypeDependantColor,
        p: 1.8,
        pt: 4.2,
        display: "grid",
        gridTemplateAreas: `"title title"
                              "price bestOffer"`,
        gridTemplateRows: "1fr min-content",
      }}
    >
      <Typography variant="cardTitle" sx={{ gridArea: "title" }}>
        {name}
      </Typography>
      <SaleText price={sale?.unitary_price_float} />

      <OfferText price={offer?.unitary_price_float} hovered={hovered} />
    </Box>
  );
}
