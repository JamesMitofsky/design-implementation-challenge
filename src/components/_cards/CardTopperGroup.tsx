import { Box } from "@mui/material";
import createHslValue from "../../functions/createHslValue";
import { useState } from "react";
import CardTopper from "./CardTopper";

export default function CardTopperGroup({
  primaryHue,
}: {
  primaryHue: number;
}) {
  const [primaryColorAsHsl] = useState(createHslValue(primaryHue));

  return (
    <Box
      sx={{
        height: "1.2rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardTopper hslValue={primaryColorAsHsl} width="80%" />
      <CardTopper hslValue={primaryColorAsHsl} width="90%" />
    </Box>
  );
}
