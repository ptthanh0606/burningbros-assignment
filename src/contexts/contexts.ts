import { createContext } from "react";
import { SnackbarContextValue } from "src/contexts/SnackbarContext";

export const snackbarContext = createContext<SnackbarContextValue>({
  showSnackbar: () => {},
});
