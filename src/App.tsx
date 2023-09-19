import { ThemeProvider, createTheme } from "@mui/material";
import Home from "src/pages/Home/Home";
import { QueryClient, QueryClientProvider } from "react-query";

const customizedMUITheme = createTheme({
  palette: {
    primary: {
      main: "#FC5C49",
    },
    text: {
      primary: "#030202",
      secondary: "#A1A1A1",
    },
  },
});

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={customizedMUITheme}>
        <Home />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
