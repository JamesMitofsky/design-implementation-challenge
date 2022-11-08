import { NFTStructure } from "../types/NFTObjectType";
import { Card as MUICard, CardContent, CardMedia } from "@mui/material";
import { Image } from "mui-image";

// maxwidth: 225px

const Card = (props: NFTStructure) => {
  console.log(props.thumbnail);
  return (
    <MUICard sx={{ minWidth: 225, maxWidth: 225, height: 400 }}>
      <Image src={props.thumbnail} alt="Preview of NFT for sale" height={200} />
      <CardContent>{props.name}</CardContent>
    </MUICard>
  );
};

export default Card;
