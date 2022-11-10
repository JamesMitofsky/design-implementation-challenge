import { NFTStructure } from "../types/NFTObjectType";
import { Card as MUICard } from "@mui/material";
import { Image } from "mui-image";
import CardText from "./CardText";

// maxwidth: 225px

const Card = (props: NFTStructure) => {
  return (
    <MUICard
      sx={{
        width: "150px",
        height: "300px",
        borderRadius: 3,
      }}
    >
      <Image
        src={props.thumbnail}
        alt="Preview of NFT for sale"
        height={"70%"}
      />

      <CardText {...props} />
    </MUICard>
  );
};

export default Card;
