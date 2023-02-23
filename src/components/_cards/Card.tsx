import { NFTStructure } from "../../types/NFTObjectType";
import CardText from "./CardText";
import CardImage from "./CardImage";
import CardWrapper from "./CardWrapper";
import { useEffect, useState } from "react";
import createRandomHue from "../../functions/createRandomHue";

export default function PrimaryCard({ nftData }: { nftData: NFTStructure }) {
  const [primaryHueValue, setPrimaryHueValue] = useState(0);

  useEffect(() => {
    const primaryHue = createRandomHue();
    setPrimaryHueValue(primaryHue);
  }, []);

  return (
    <CardWrapper
      primaryHueValue={primaryHueValue}
      kind={nftData.collection.kind}
    >
      <CardImage
        primaryHue={primaryHueValue}
        {...nftData}
        alt="Preview of NFT for sale"
      />
      <CardText {...nftData} />
    </CardWrapper>
  );
}
