import { Badge } from "@mui/material";
import CheckboxImage from "../assets/checkbox.png";
import AvatarImage from "./AvatarImage";

interface Props {
  imageURL: string;
  altText?: string;
  checked?: boolean;
}

export default function CheckableAvatar({ imageURL, altText, checked }: Props) {
  return (
    <Badge
      sx={{
        width: "fit-content",
        transform: "translateY(-50%)",
        zIndex: "1",
        backgroundColor: "primary.main",
        borderRadius: "50%",
        ml: 1.6,
        p: 0.35,
      }}
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      badgeContent={checked && <img height={15} src={CheckboxImage} />}
    >
      <Badge
        sx={{ backgroundColor: "#e1e2db", borderRadius: "50%" }}
        overlap="circular"
      >
        <AvatarImage imageURL={imageURL} altText={altText} size={38} />
      </Badge>
    </Badge>
  );
}
