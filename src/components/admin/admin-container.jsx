import { Box, Button, Typography } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import ModalContainer from "./modal-container";
import { StyledEngineProvider } from "@mui/material/styles";
import GachaTableContainer from "../home/gacha-table-container";
import GetData from "../../hooks/data-fetch";
import Loading from "../loading";
export default function AdminContainer({ theme, mode }) {
  const [isModal, setIsModal] = useState(false);
  const handleOpen = () => setIsModal(true);
  const handleClose = () => setIsModal(false);
  const { status, data, error, isFetching } = GetData();
  if (status === "loading") {
    return <Loading />;
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Button
        sx={{ backgroundColor: "#323c50", width: "200px" }}
        onClick={handleOpen}
      >
        <AddIcon sx={{ color: "white" }} />
        <Typography sx={{ color: "white" }}>Insert a data</Typography>
      </Button>

      <GachaTableContainer />
      <StyledEngineProvider injectFirst>
        <ModalContainer open={isModal} closeModal={handleClose} data={data} />
      </StyledEngineProvider>
    </Box>
  );
}
