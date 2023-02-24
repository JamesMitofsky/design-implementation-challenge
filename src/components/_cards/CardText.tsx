import { NFTStructure } from "../../types/NFTObjectType";
import { CardContent, Typography, Box } from "@mui/material";
import AvatarImage from "../AvatarImage";
import CheckableAvatar from "../CheckableAvatar";

type Props = Pick<NFTStructure, "name" | "sale" | "collection" | "offer">;

export default function CardText({ name, sale, collection, offer }: Props) {
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

      <Box sx={{ gridArea: "price" }}>
        <Typography variant="cardSubtitle">Price</Typography>
        <Typography sx={{ fontSize: 10 }}>
          {sale?.unitary_price_float.toFixed(1)}
        </Typography>
      </Box>
      {offer && (
        <Box
          sx={{
            gridArea: "bestOffer",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Typography variant="cardSubtitle">Best Offer</Typography>
          <Typography sx={{ fontSize: 10 }}>
            {offer?.unitary_price_float.toFixed(1)}
          </Typography>
        </Box>
      )}
    </CardContent>
  );
}
