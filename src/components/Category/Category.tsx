import { Box, List, Typography } from "@mui/material";
import CategoryList from "src/components/CategoryList/CategoryList";
import { CategoryMany } from "src/entity/category";

export interface CategoryProps {
  categories: CategoryMany | undefined;
  onSelectCategory?: (category: string) => void;
}

const Category = ({
  categories,
  onSelectCategory = () => {},
}: CategoryProps) => {
  if (!categories) return null;

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
      <List component="nav">
        <CategoryList
          categories={categories}
          onSelectCategory={onSelectCategory}
        />
      </List>
    </Box>
  );
};

export default Category;
