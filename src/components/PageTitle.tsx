import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

interface Props {
  title: string;
  subtitle: string;
}

export default function PageTitle({ title, subtitle }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 2,
        p: 4,
        py: 7,
        borderBottom: 1,
        borderColor: grey[900],
      }}
    >
      <Typography variant="h1" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Typography variant="subtitle1" sx={{ maxWidth: 400 }}>
        {subtitle}
      </Typography>
    </Box>
  );
}
