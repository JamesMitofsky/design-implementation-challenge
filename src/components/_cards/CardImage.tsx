import { Image } from "mui-image";
import { NFTStructure } from "../../types/NFTObjectType";
import { Box } from "@mui/material";
import createLinearGradiant from "../../functions/createLinearGradiant";
import { useEffect, useState } from "react";
import CheckableAvatar from "../CheckableAvatar";

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
    collection.kind === "erc1155" ? "13.8rem" : "15rem"; // 12.5rem minus the height of CardTopperGroup, 1.2rem

  return (
    <Box
      sx={{
        background: linearGradiant,
        height: typeSpecificHeight,
        zIndex: 1,
      }}
    >
      <Image src={thumbnail} alt={alt} height="inherit" duration={100} />
      <CheckableAvatar
        imageURL={collection.avatar}
        checked={collection.certified}
      />
    </Box>
  );
}
