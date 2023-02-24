import { Avatar } from "@mui/material";

interface Props {
  imageURL: string;
  size: number;
  altText?: string;
}

export default function AvatarImage({ imageURL, altText, size }: Props) {
  return (
    <Avatar
      alt={altText}
      src={imageURL}
      sizes={"small"}
      sx={{
        height: size,
        width: size,
      }}
    />
  );
}
