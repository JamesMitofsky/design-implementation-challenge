import { Card, Box } from "@mui/material";
import LayeredCardEffect from "./CardTopperGroup";
import returnArrayOfOneComponent from "../../functions/returnArrayOfOneComponent";

interface Props {
  children: React.ReactNode;
  toggleHover?: () => void;
  kind?: "erc721" | "erc1155";
  primaryHueValue?: number;
  height?: number;
  width?: number;
}

export default function CardWrapper({
  children,
  height,
  width,
  toggleHover,
  primaryHueValue,
  kind,
}: Props) {
  return (
    <Box
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      sx={{
        width: "13rem",
        height: "22.75rem",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {kind === "erc1155" && (
        <LayeredCardEffect primaryHue={primaryHueValue!} />
      )}
      <Card
        sx={{
          width,
          height,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          // styles for positioning against the card toppers
          boxShadow: "0 -0.2px 1px 0 #4e4b4b",
          zIndex: 1,
        }}
      >
        {children}
      </Card>
    </Box>
  );
}
