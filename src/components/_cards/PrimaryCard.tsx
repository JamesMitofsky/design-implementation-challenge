import { NFTStructure } from "../../types/NFTObjectType";
import { Card as MUICard } from "@mui/material";
import { Image } from "mui-image";
import CardText from "./CardText";
import { grey } from "@mui/material/colors";

// maxwidth: 225px

export default function PrimaryCard(props: NFTStructure) {
  return (
    <MUICard
      sx={{
        width: "150px",
        height: "300px",
        borderRadius: 3,
        border: 1,
        borderStyle: "solid",
        borderColor: "secondary.main",
      }}
      elevation={0}
    >
      <Image
        src={props.thumbnail}
        alt="Preview of NFT for sale"
        height={"70%"}
      />

      <CardText {...props} />
    </MUICard>
  );
}
