import { Image } from "mui-image";
import { NFTStructure } from "../../types/NFTObjectType";
import { Box } from "@mui/material";
import createLinearGradiant from "../../functions/createLinearGradiant";
import { useEffect, useState } from "react";

interface Props extends Pick<NFTStructure, "thumbnail" | "collection"> {
  alt: string;
  primaryHue: number;
}

export default function CardImage({
  thumbnail,
  alt,
  primaryHue,
  collection,
}: Props) {
  const [linearGradiant, setLinearGradiant] = useState("");

  useEffect(() => {
    if (linearGradiant) return;

    const gradiant = createLinearGradiant(primaryHue);
    setLinearGradiant(gradiant);
  }, []);

  // primary image height needs to be calculated to give extra space to the topper component
  const typeSpecificHeight =
    collection.kind === "erc1155" ? "11.3rem" : "12.5rem"; // 12.5rem minus the height of CardTopperGroup

  return (
    <Box
      sx={{
        background: linearGradiant,
        height: typeSpecificHeight,
        zIndex: 1,
      }}
    >
      <Image src={thumbnail} alt={alt} height="inherit" duration={500} />
    </Box>
  );
}
