import { NFTStructure } from "../types/NFTObjectType";
import { Card as MUICard } from "@mui/material";
import { Image } from "mui-image";
import CardText from "./CardText";

// maxwidth: 225px

const Card = (props: NFTStructure) => {
  return (
    <MUICard
      sx={{
        minWidth: 225,
        maxWidth: 225,
        height: 400,
        borderRadius: 3,
      }}
    >
      <Image src={props.thumbnail} alt="Preview of NFT for sale" height={300} />

      <CardText {...props} />
    </MUICard>
  );
};

export default Card;
