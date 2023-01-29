import { Avatar } from "@mui/material";

interface Props {
  imageURL: string;
  altText?: string;
  checked?: boolean;
}

export default function AvatarImage({ imageURL, altText, checked }: Props) {
  return (
    <Avatar
      alt={altText}
      src={imageURL}
      sx={{
        height: 30,
        width: "auto",
      }}
    />
  );
}
