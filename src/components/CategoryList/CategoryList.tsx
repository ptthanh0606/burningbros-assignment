import { useState } from "react";
import CategoryItem from "src/components/CategoryItem/CategoryItem";
import { CategoryMany } from "src/entity/category";

export interface CategoryListProps {
  categories: CategoryMany;
  onSelectCategory: (category: string) => void;
}

const CategoryList = ({ categories, onSelectCategory }: CategoryListProps) => {
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);

  const menuLabels: string[] = ["All products", ...categories];

  return menuLabels.map((label, index) => (
    <CategoryItem
      key={index}
      menuIndex={index}
      currentMenuIndex={selectedMenuIndex}
      onClick={() => {
        onSelectCategory(menuLabels[index]);
        setSelectedMenuIndex(index);
      }}
    >
      {label}
    </CategoryItem>
  ));
};

export default CategoryList;
