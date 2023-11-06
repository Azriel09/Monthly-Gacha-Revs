import { Box, Button, Typography } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import ModalContainer from "./modal-container1";
import ModalContainer2 from './modal-container2'
import { StyledEngineProvider } from "@mui/material/styles";
import GachaTableContainer from "../home/gacha-table-container";
import GetData from "../../hooks/data-fetch";
import Loading from "../loading";
export default function AdminContainer({ theme, mode }) {
  const [isModal, setIsModal] = useState(false);
  const [isModal2, setIsModal2] = useState(false)
  const handleOpen2 = () => setIsModal2(true)
  const handleOpen = () => setIsModal(true);
  const handleClose = () => {
    setIsModal(false);
    setIsModal2(false)
  }
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
      <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "20px"}}>
      <Button
        sx={{ backgroundColor: "#323c50", width: "200px" }}
        onClick={handleOpen}
      >
        <AddIcon sx={{ color: "white" }} />
        <Typography sx={{ color: "white" }}>Insert a data</Typography>
      </Button>
      <Button
        sx={{ backgroundColor: "#323c50", width: "200px" }}
        onClick={handleOpen2}
      >
        <AddIcon sx={{ color: "white" }} />
        <Typography sx={{ color: "white" }}>Insert a game</Typography>
      </Button>
      </Box>
      <GachaTableContainer />
      <StyledEngineProvider injectFirst>
        <ModalContainer open={isModal} closeModal={handleClose} data={data} />
        <ModalContainer2 open={isModal2} closeModal={handleClose} data={data}/>
      </StyledEngineProvider>
    </Box>
  );
}
