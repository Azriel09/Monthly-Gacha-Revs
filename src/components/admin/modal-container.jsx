import {
  Box,
  Modal,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import "./modal-container.scss";
export default function ModalContainer({ open, closeModal }) {
  const [selectedData, setSelectedData] = useState({
    id: "",
    game: "",
    server: "",
    date: "",
    revenueAndroid: "",
    revenueApple: "",
    downloadsAndroid: "",
    downloadsApple: "",
    totalRevenue: "",
    totalDownloads: "",
  });

  const gameFields = {
    gameList: ["Genshin Impact", "Honkai Star Rail"],
    serverList: ["china", "global", "japan", "korea", "sea"],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedData((prevState) => ({ ...prevState, [name]: value }));
  };

  const selectStyle = {
    height: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.2em",
    letterSpacing: "1px",
  };
  return (
    <Modal keepMounted open={open} onClose={closeModal}>
      <Box
        sx={{
          width: "50%",
          height: "70%",
          margin: "10vh auto 0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#071426",
          borderRadius: "20px",
          gap: "20px",
        }}
      >
        <FormControl
          variant="standard"
          sx={{ minWidth: "200px", color: "white" }}
        >
          <Typography>Select Game</Typography>
          <Select
            value={selectedData.game}
            onChange={(e) => handleChange(e)}
            label="Game"
            name="game"
            SelectDisplayProps={{ style: selectStyle }}
          >
            {gameFields.gameList.map((game, index) => {
              return (
                <MenuItem key={index} value={game}>
                  {game}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl
          variant="standard"
          sx={{ minWidth: "200px", color: "white", backgroundColor: "#02060c" }}
        >
          <Typography>Select Server</Typography>
          <Select
            value={selectedData.server}
            onChange={(e) => handleChange(e)}
            label="Server"
            name="server"
            SelectDisplayProps={{ style: selectStyle }}
            sx={{ backgroundColor: "#02060c" }}
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
          >
            {gameFields.serverList.map((game, index) => {
              return (
                <MenuItem key={index} value={game}>
                  {game}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </Modal>
  );
}
