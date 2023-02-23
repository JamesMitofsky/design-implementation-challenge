import Skeleton from "@mui/material/Skeleton";
import CardWrapper from "./CardWrapper";

export default function LoadingSkeleton() {
  return (
    <>
      <CardWrapper>
        <Skeleton
          animation="wave"
          height={10}
          width="80%"
          style={{ marginBottom: 6 }}
          sx={{ bgcolor: "grey.800" }}
        />

        <Skeleton
          animation="wave"
          height={10}
          width="40%"
          sx={{ bgcolor: "grey.800" }}
        />

        <Skeleton
          animation="wave"
          variant="rectangular"
          sx={{ height: 190, bgcolor: "grey.800" }}
        />
      </CardWrapper>
    </>
  );
}
