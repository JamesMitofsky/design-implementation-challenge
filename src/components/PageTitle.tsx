import { Box, Typography } from "@mui/material";

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
        maxWidth: 600,
        margin: "auto",
      }}
    >
      <Typography variant="h1" gutterBottom>
        {title}
      </Typography>
      <Typography color="primary.dark" variant="subtitle1" gutterBottom>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default PageTitle;
