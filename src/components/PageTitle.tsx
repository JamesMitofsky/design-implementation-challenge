import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const PageTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
        mt: 4,
        mb: 5,
        borderBottom: 1,
        borderColor: grey[900],
      }}
    >
      <Typography variant="h1" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Typography variant="subtitle1">{subtitle}</Typography>
    </Box>
  );
};

export default PageTitle;
