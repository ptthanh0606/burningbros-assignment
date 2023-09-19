import { ListItemButton, ListItemButtonProps, styled } from "@mui/material";

const StyledListItemButton = styled(ListItemButton)<ListItemButtonProps>(
  ({ theme }) => ({
    borderRadius: "4px",
    color: theme.palette.text.secondary,
    "&.Mui-selected": {
      color: "white",
      fontWeight: "bold",
      backgroundColor: theme.palette.primary.main,
      "&.Mui-focusVisible": { backgroundColor: theme.palette.primary.main },
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
      },
    },
  })
);

export interface CategoryItemProps extends ListItemButtonProps {
  currentMenuIndex: number;
  menuIndex: number;
}

const CategoryItem = ({
  currentMenuIndex,
  menuIndex,
  ...restProps
}: CategoryItemProps) => {
  return (
    <StyledListItemButton
      disableRipple
      selected={menuIndex === currentMenuIndex}
      {...restProps}
    />
  );
};

export default CategoryItem;
