import { Card as MUICard } from "@mui/material";

interface Props {
  children?: React.ReactNode;
  height?: number;
  width?: number;
}

export default function CardWrapper({ children, height, width }: Props) {
  return (
    <MUICard
      sx={{
        width,
        height,
        borderRadius: ".7rem",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        // styles for positioning against the card toppers
        boxShadow: "0 -0.2px 1px 0 #4e4b4b",
        zIndex: 1,
      }}
      // elevation={0}
    >
      {children}
    </MUICard>
  );
}
