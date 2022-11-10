import { Box, Typography } from "@mui/material";
import Divider from "../components/Divider";

const PageTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <Box sx={{ mb: 3.5 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: 300,
          margin: "auto",
          mt: 4,
          mb: 5,
        }}
      >
        <Typography variant="h1" sx={{ mb: 2 }}>
          {title}
        </Typography>
        <Typography variant="subtitle1">{subtitle}</Typography>
      </Box>
      <Divider />
    </Box>
  );
};

export default PageTitle;
