import { Box, Container, Grid, Typography } from "@mui/material";
import SearchBar, { SearchBarProps } from "src/components/SearchBar/SearchBar";

export interface HeaderProps {
  onChangeSearchInput: SearchBarProps["onChangeSearchInput"];
}

const Header = ({ onChangeSearchInput }: HeaderProps) => {
  return (
    <Box
      bgcolor="white"
      display="flex"
      alignItems="center"
      width="100%"
      height="4rem"
      position="sticky"
      top="0"
      zIndex="1"
    >
      <Container maxWidth="xl">
        <Grid container display="flex" alignItems="center">
          <Grid item xs={2} pl={2}>
            <Typography fontWeight="800" variant="caption">
              Burning
            </Typography>
            <Typography fontWeight="800" variant="caption" color="primary">
              Bros
            </Typography>
          </Grid>
          <Grid item xs={8} display="flex" alignItems="center">
            <SearchBar onChangeSearchInput={onChangeSearchInput} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
