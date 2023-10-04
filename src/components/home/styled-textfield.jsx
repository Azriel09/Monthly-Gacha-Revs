import styled from "@emotion/styled";
import { TextField, useTheme } from "@mui/material";

export const StyledTextField = styled((props) => <TextField {...props} />)({
  "& .MuiInputBase-root ": {
    color: "white",
    backgroundColor: "#17212f",
    width: "70%",
    padding: 0,
  },
});
