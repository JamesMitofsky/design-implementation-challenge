import { Avatar } from "@mui/material";

interface Props {
  imageURL: string;
  size: number;
  altText?: string;
  checked?: boolean;
}

export default function AvatarImage({
  imageURL,
  altText,
  size,
  checked,
}: Props) {
  return (
    <Avatar
      alt={altText}
      src={imageURL}
      sx={{
        height: { size },
        width: { size },
      }}
    />
  );
}
