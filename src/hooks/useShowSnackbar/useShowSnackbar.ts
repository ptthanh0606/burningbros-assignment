import { useContext } from "react";
import { snackbarContext } from "src/contexts/contexts";

const useShowSnackbar = () => {
  const { showSnackbar } = useContext(snackbarContext);

  return showSnackbar;
};

export default useShowSnackbar;
