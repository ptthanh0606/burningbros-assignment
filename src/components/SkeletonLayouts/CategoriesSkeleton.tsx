import { Box, Skeleton } from "@mui/material";

const CategoriesSkeleton = () => {
  return (
    <Box display="flex" flexDirection="column">
      {[...Array(10)].map(() => (
        <Skeleton height="3rem" />
      ))}
    </Box>
  );
};

export default CategoriesSkeleton;
