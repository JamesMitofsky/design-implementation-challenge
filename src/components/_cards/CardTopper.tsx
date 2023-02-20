import { Card as MUICard } from "@mui/material";

interface Props {
  hslValue: string;
  width: string;
}

export default function CardTopper({ hslValue, width }: Props) {
  return (
    <MUICard
      sx={{
        width,
        height: "100%",
        borderRadius: ".7rem .7rem 0 0",
        background: hslValue,
        margin: "auto",
        boxShadow: "0 -0.2px 1px 0 #4e4b4b94",
      }}
    />
  );
}
