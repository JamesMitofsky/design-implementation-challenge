import { NFTStructure } from "../../types/NFTObjectType";
import CardText from "./_text/Text";
import CardImage from "./CardImage";
import CardWrapper from "./CardWrapper";
import { useEffect, useState } from "react";
import createRandomHue from "../../functions/createRandomHue";
import BuyNowButton from "../BuyNowButton";
import { Box } from "@mui/material";

export default function PrimaryCard({ nftData }: { nftData: NFTStructure }) {
  const [primaryHueValue, setPrimaryHueValue] = useState(0);

  useEffect(() => {
    const primaryHue = createRandomHue();
    setPrimaryHueValue(primaryHue);
  }, []);

  // detect when card is being hovered
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered((prev) => !prev);

  return (
    <CardWrapper
      toggleHover={toggleHover}
      primaryHueValue={primaryHueValue}
      kind={nftData.collection.kind}
    >
      <CardImage
        primaryHue={primaryHueValue}
        {...nftData}
        alt="Preview of NFT for sale"
      />
      <CardText {...nftData} hovered={hovered} />
    </CardWrapper>
  );
}
