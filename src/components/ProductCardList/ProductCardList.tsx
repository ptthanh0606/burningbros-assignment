import { Box, Grid } from "@mui/material";
import { InfiniteData } from "react-query";
import GreetingMessage from "src/components/GreetingMessage/GreetingMessage";
import MessagePresentation from "src/components/MessagePresentation/MessagePresentation";
import ProductCard from "src/components/ProductCard/ProductCard";
import ProductListSkeleton from "src/components/SkeletonLayouts/ProductListSkeleton";
import ProductsSkeleton from "src/components/SkeletonLayouts/ProductsSkeleton";
import { ProductMany } from "src/entity/product";
import useObserveElement from "src/hooks/useObserveElement/useObserveElement";

export interface ProductCardListProps {
  data: InfiniteData<ProductMany> | undefined;
  isLoading: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

const ProductCardList = ({
  data,
  isLoading,
  fetchNextPage,
  hasNextPage,
}: ProductCardListProps) => {
  const targetObserveRef = useObserveElement({
    encounterAction: () => {
      if (isLoading || !hasNextPage) return;

      fetchNextPage();
    },
  });

  if (!data || isLoading) return <ProductListSkeleton />;

  if (!data.pages[0].products.length) return <MessagePresentation />;

  const renderedProductList = data.pages.map((page) =>
    page.products.map((product) => (
      <Grid item xs={3} key={product.id}>
        <ProductCard product={product} />
      </Grid>
    ))
  );

  return (
    <Box>
      <GreetingMessage numberOfRecord={data.pages[0].total} />

      <Grid container flexWrap="wrap" spacing={1} py={1}>
        {renderedProductList}
      </Grid>

      {hasNextPage ? (
        <div ref={targetObserveRef}>
          <ProductsSkeleton />
        </div>
      ) : null}
    </Box>
  );
};

export default ProductCardList;
