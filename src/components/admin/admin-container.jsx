import { Box, Button, Typography } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import ModalContainer from "./modal-container";
import { StyledEngineProvider } from "@mui/material/styles";
import GachaTableContainer from "../home/gacha-table-container";
export default function AdminContainer({ theme, mode }) {
  const [isModal, setIsModal] = useState(false);
  const handleOpen = () => setIsModal(true);
  const handleClose = () => setIsModal(false);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Button
        sx={{ backgroundColor: "#323c50", width: "200px" }}
        onClick={handleOpen}
      >
        <AddIcon sx={{ color: "white" }} />
        <Typography sx={{ color: "white" }}>Add an item</Typography>
      </Button>

      <GachaTableContainer />
      <StyledEngineProvider injectFirst>
        <ModalContainer open={isModal} closeModal={handleClose} />
      </StyledEngineProvider>
    </Box>
  );
}
