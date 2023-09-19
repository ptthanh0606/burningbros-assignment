import { Search } from "@mui/icons-material";
import { InputAdornment, TextField, TextFieldProps } from "@mui/material";

export interface SearchBarProps {
  onChangeSearchInput: TextFieldProps["onChange"];
}

const SearchBar = ({ onChangeSearchInput }: SearchBarProps) => {
  return (
    <TextField
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
      size="small"
      fullWidth
      placeholder="What do you want to look for?"
      onChange={onChangeSearchInput}
    />
  );
};

export default SearchBar;
