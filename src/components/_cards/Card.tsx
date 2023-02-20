import { NFTStructure } from "../../types/NFTObjectType";
import { Box } from "@mui/material";
import CardText from "./CardText";
import CardImage from "./CardImage";
import CardWrapper from "./CardWrapper";
import { useEffect, useState } from "react";
import createRandomHue from "../../functions/createRandomHue";
import createHslValue from "../../functions/createHslValue";
import LayeredCardEffect from "./CardTopperGroup";

export default function PrimaryCard(nftData: NFTStructure) {
  const [primaryHueValue, setPrimaryHueValue] = useState(0);

  useEffect(() => {
    if (primaryHueValue) return;

    const primaryHue = createRandomHue();
    setPrimaryHueValue(primaryHue);
  }, []);

  return (
    <Box
      sx={{
        width: "13rem",
        height: "22.75rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {nftData.collection.kind === "erc1155" && (
        <LayeredCardEffect primaryHue={primaryHueValue} />
      )}
      <CardWrapper>
        <CardImage
          primaryHue={primaryHueValue}
          {...nftData}
          alt="Preview of NFT for sale"
        />
        <CardText {...nftData} />
      </CardWrapper>
    </Box>
  );
}
