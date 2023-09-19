import { Box, Skeleton } from "@mui/material";
import ProductsSkeleton from "src/components/SkeletonLayouts/ProductsSkeleton";

const ProductListSkeleton = () => {
  return (
    <>
      <Box mb={1}>
        <Skeleton height="1.5rem" />
      </Box>
      <ProductsSkeleton />
    </>
  );
};

export default ProductListSkeleton;
