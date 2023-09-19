import { Box, Typography } from "@mui/material";
import SearchOffIcon from "@mui/icons-material/SearchOff";

const MessagePresentation = () => {
  return (
    <Box
      height="75vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <SearchOffIcon fontSize="large" color="primary" />
      <Typography variant="body1">
        Unfortunately, nothing is found! :(
      </Typography>
      <Typography variant="caption" color="text.secondary">
        We did not find any result for your product. Please try again.
      </Typography>
    </Box>
  );
};

export default MessagePresentation;
