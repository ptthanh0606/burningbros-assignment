import { Grid, Skeleton } from "@mui/material";
import { LIMIT_PRODUCTS } from "src/service/constants";

const ProductSkeletons = () => {
  return (
    <Grid container spacing={1} display={"flex"}>
      {[...Array(LIMIT_PRODUCTS)].map((_, index) => (
        <Grid item xs={3} key={index}>
          <Skeleton variant="rounded" height={235} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductSkeletons;
