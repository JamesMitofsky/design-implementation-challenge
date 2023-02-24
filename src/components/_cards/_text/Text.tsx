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
        pt: 4.5,
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
    </CardContent>
  );
}
