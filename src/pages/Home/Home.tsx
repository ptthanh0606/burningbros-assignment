import { Container, Grid } from "@mui/material";
import { useState } from "react";
import Category from "src/components/Category/Category";
import Header, { HeaderProps } from "src/components/Header/Header";
import ProductCardList from "src/components/ProductCardList/ProductCardList";
import { CategoryMany } from "src/entity/category";
import { ProductMany } from "src/entity/product";
import useDebounce from "src/hooks/useDebounce/useDebounce";
import useQueryData from "src/hooks/useQueryData/useQueryData";
import useQueryInfiniteData from "src/hooks/useQueryInfiniteData/useQueryInfiniteData";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");

  const debounce = useDebounce();

  const {
    data: productPages,
    isLoading: isLoadingProducts,
    fetchNextPage: fetchNextProductPage,
    hasNextPage: hasNextProductPage,
  } = useQueryInfiniteData<ProductMany>({
    entity: "products",
    action: "GetManyWithPagination",
    requestData: {
      searchQuery: searchInput.trim(),
    },
    dependencies: [searchInput],
  });

  const { data: categoriesData, isLoading: isLoadingCategories } =
    useQueryData<CategoryMany>({
      entity: "category",
      action: "GetMany",
    });

  const handleSearchProduct: HeaderProps["onChangeSearchInput"] = (event) => {
    debounce(() => {
      setSearchInput(event.target.value);
      window.scrollTo(0, 0);
    }, 1000);
  };

  return (
    <>
      <Header onChangeSearchInput={handleSearchProduct} />
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={2} pr={1}>
            <Category
              categories={categoriesData}
              isLoadingCategories={isLoadingCategories}
            />
          </Grid>
          <Grid item xs={10} container flexDirection="column" pt={1.5}>
            <ProductCardList
              data={productPages}
              isLoading={isLoadingProducts}
              fetchNextPage={fetchNextProductPage}
              hasNextPage={!!hasNextProductPage}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
