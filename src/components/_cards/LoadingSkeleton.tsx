import Skeleton from "@mui/material/Skeleton";
import CardWrapper from "./CardWrapper";
import { Box } from "@mui/material";

export default function LoadingSkeleton() {
  return (
    <>
      <CardWrapper>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Skeleton
            animation="wave"
            variant="rectangular"
            sx={{ minHeight: "12.5rem", bgcolor: "grey.800" }}
          />
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              p: 2,
            }}
          >
            <Box>
              <Skeleton
                animation="wave"
                height={10}
                width="90%"
                style={{ marginBottom: 6 }}
                sx={{ bgcolor: "grey.800" }}
              />
              <Skeleton
                animation="wave"
                height={10}
                width="50%"
                style={{ marginBottom: 6 }}
                sx={{ bgcolor: "grey.800" }}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Skeleton
                animation="wave"
                height={10}
                width="40%"
                sx={{ bgcolor: "grey.800" }}
              />
              <Skeleton
                animation="wave"
                height={10}
                width="20%"
                sx={{ bgcolor: "grey.800" }}
              />
            </Box>
          </Box>
        </Box>
      </CardWrapper>
    </>
  );
}
