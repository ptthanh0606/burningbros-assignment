import { Typography } from "@mui/material";

const GreetingMessage = ({ numberOfRecord }: { numberOfRecord: number }) => {
  return (
    <Typography variant="caption" color="text.secondary" component="p">
      Great, we found you{" "}
      <Typography color="primary" variant="caption" fontWeight={800}>
        {numberOfRecord}
      </Typography>{" "}
      products!
    </Typography>
  );
};

export default GreetingMessage;
