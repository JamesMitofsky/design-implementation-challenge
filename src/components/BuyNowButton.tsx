import { Button, Typography } from "@mui/material";

export default function BuyNowButton() {
  return (
    <Button
      variant="contained"
      sx={{
        width: "max-content",
        fontSize: 12,
        textTransform: "none",
        px: 1.4,
        py: 0.6,
      }}
    >
      Buy Now
    </Button>
  );
}
