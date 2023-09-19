import { Alert, AlertProps, BoxProps, Snackbar } from "@mui/material";
import { useState } from "react";
import { snackbarContext } from "src/contexts/contexts";

export interface SnackbarContextValue {
  showSnackbar: (message: string, severity?: AlertProps["severity"]) => void;
}

const SnackbarContextProvider = ({ children }: BoxProps) => {
  const [shouldOpenSnackbar, setShouldOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [severity, setSeverity] = useState<AlertProps["severity"]>("info");

  return (
    <snackbarContext.Provider
      value={{
        showSnackbar: (message, severity) => {
          setSnackbarMessage(message);
          setSeverity(severity);
          setShouldOpenSnackbar(true);
        },
      }}
    >
      {children}

      <Snackbar
        open={shouldOpenSnackbar}
        onClose={() => setShouldOpenSnackbar(false)}
        autoHideDuration={10000}
      >
        <Alert severity={severity} variant="filled">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </snackbarContext.Provider>
  );
};

export default SnackbarContextProvider;
