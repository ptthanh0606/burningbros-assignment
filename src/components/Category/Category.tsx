import { Box, List, Typography } from "@mui/material";
import CategoryList from "src/components/CategoryList/CategoryList";
import CategoriesSkeleton from "src/components/SkeletonLayouts/CategoriesSkeleton";
import { CategoryMany } from "src/entity/category";

export interface CategoryProps {
  categories: CategoryMany | undefined;
  isLoadingCategories: boolean;
  onSelectCategory?: (category: string) => void;
}

const Category = ({
  categories,
  isLoadingCategories,
  onSelectCategory = () => {},
}: CategoryProps) => {
  const renderedCategoryList =
    !categories || isLoadingCategories ? (
      <CategoriesSkeleton />
    ) : (
      <List component="nav">
        <CategoryList
          categories={categories}
          onSelectCategory={onSelectCategory}
        />
      </List>
    );

  return (
    <Box
      position="sticky"
      top={65}
      height="85vh"
      sx={{
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          width: "10px",
          float: "right",
        },
      }}
    >
      <Typography variant="h6" fontWeight={800} pl={2}>
        Categories
      </Typography>
      {renderedCategoryList}
    </Box>
  );
};

export default Category;
