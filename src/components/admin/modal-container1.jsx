import {
  Box,
  Modal,
  Typography,
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import "./modal-container.scss";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DownloadIcon from "@mui/icons-material/Download";
import axios from "axios";
export default function ModalContainer({ open, closeModal, data }) {
  const [selectedData, setSelectedData] = useState({
    game: "",
    server: "",
    revenueAndroid: null,
    revenueApple: null,
    downloadsAndroid: null,
    downloadsApple: null,
    totalRevenue: null,
    totalDownloads: null,
  });
  const [inputError, setInputError] = useState({
    revenueAndroid: false,
    revenueApple: false,
    downloadsAndroid: false,
    downloadsApple: false,
  });
  const [cancelSubmit, setCancelSubmit] = useState(false);
  const gameFields = {
    gameList: data.map((item) => {
      return item.name;
    }),
    serverList: ["china", "global", "japan", "korea", "sea"],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSelectedData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    const fieldsChecklist = [
      "revenueAndroid",
      "revenueApple",
      "downloadsAndroid",
      "downloadsApple",
    ];
    console.log("Submit");

    // fieldsChecklist.forEach((element) => {
    //   const value = selectedData[element];
    //   const convertedValue = Number(value);
    //   if (convertedValue === 0) {
    //     setInputError((prevState) => ({ ...prevState, [element]: true }));
    //     setCancelSubmit(true);
    //   } else {
    //     setInputError((prevState) => ({ ...prevState, [element]: false }));
    //     setCancelSubmit(false);
    //   }
    // });

    // Prevents submitting if error is true
    // if (!cancelSubmit) {
    //   return;
    // } else {
    //   console.log("submitted");
    // }
  };

  const handleClick = () => {
    const game = selectedData.game;
    let downloads;
    let revenue;
    let expandData = [
      {
        revenueAndroid: null,
        revenueApple: null,
        downloadsAndroid: null,
        downloadsApple: null,
      },
    ];
    data.map((item) => {
      if (item.name === selectedData.game) {
        let tempDl = item.downloads;
        let tempR = item.revenue;
        let tempXRAn = item.expandData[0].revenueAndroid;
        let tempXRAp = item.expandData[0].revenueApple;
        let tempXDAn = item.expandData[0].downloadsAndroid;
        let tempXDAp = item.expandData[0].downloadsApple;
        tempDl.unshift(
          Number(selectedData.downloadsAndroid) +
            Number(selectedData.downloadsApple)
        );
        tempR.unshift(
          Number(selectedData.revenueAndroid) +
            Number(selectedData.revenueApple)
        );
        tempXRAn.unshift(Number(selectedData.revenueAndroid));
        tempXRAp.unshift(Number(selectedData.revenueApple));
        tempXDAn.unshift(Number(selectedData.downloadsAndroid));
        tempXDAp.unshift(Number(selectedData.downloadsApple));
        downloads = tempDl;
        revenue = tempR;
        expandData[0].downloadsAndroid = tempXDAn;
        expandData[0].downloadsApple = tempXDAp;
        expandData[0].revenueAndroid = tempXRAn;
        expandData[0].revenueApple = tempXRAp;
      }
    });

    const configuration = {
      method: "post",

      url: "http://localhost:8000/insert",
      data: {
        game,
        downloads,
        revenue,
        expandData,
      },
    };

    axios(configuration)
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
        error = new Error();
      });
  };
  const selectStyle = {
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
          width: "70%",
          height: "50%",
          margin: "10vh auto 0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#071426",
          borderRadius: "20px",
          gap: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "50px",
          }}
        >
          {/* FIRST COLUMN */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* GAME */}
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
            {/* SERVER */}
            <FormControl
              variant="standard"
              sx={{
                minWidth: "200px",
                color: "white",
              }}
            >
              <Typography>Select Server</Typography>
              <Select
                value={selectedData.server}
                onChange={(e) => handleChange(e)}
                label="Server"
                name="server"
                SelectDisplayProps={{ style: selectStyle }}
                sx={{ backgroundColor: "#02060c" }}
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

          {/* REVENUE */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {/* ANDROID */}
            <FormControl
              variant="standard"
              sx={{
                minWidth: "200px",
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography>Revenue</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <AndroidIcon
                  // Changes the color of icon if input error
                  sx={() => {
                    if (inputError.revenueAndroid) {
                      return { color: "red" };
                    } else {
                      return { color: "white" };
                    }
                  }}
                />
                <TextField
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={inputError.revenueAndroid}
                  name="revenueAndroid"
                  onChange={(e) => handleChange(e)}
                />
              </Box>
            </FormControl>
            {/* APPLE */}
            <FormControl
              variant="standard"
              sx={{
                minWidth: "200px",
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div style={{ height: "24px" }}></div>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <AppleIcon
                  sx={() => {
                    if (inputError.revenueApple) {
                      return { color: "red" };
                    } else {
                      return { color: "white" };
                    }
                  }}
                />
                <TextField
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={inputError.revenueApple}
                  name="revenueApple"
                  onChange={(e) => handleChange(e)}
                />
              </Box>
            </FormControl>
            {/* TOTAL REVENUE */}
            <FormControl
              variant="standard"
              sx={{
                minWidth: "200px",
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography>Total</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <AttachMoneyIcon />
                <TextField
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                    readOnly: true,
                  }}
                  name="totalRevenue"
                  value={
                    Number(selectedData.revenueAndroid) +
                    Number(selectedData.revenueApple)
                  }
                  onChange={(e) => handleChange(e)}
                />
              </Box>
            </FormControl>
          </Box>

          {/* DOWNLOADS */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {/* ANDROID */}
            <FormControl
              variant="standard"
              sx={{
                minWidth: "200px",
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography>Downloads</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <AndroidIcon
                  sx={() => {
                    if (inputError.downloadsAndroid) {
                      return { color: "red" };
                    } else {
                      return { color: "white" };
                    }
                  }}
                />
                <TextField
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={inputError.downloadsAndroid}
                  name="downloadsAndroid"
                  onChange={(e) => handleChange(e)}
                />
              </Box>
            </FormControl>
            {/* APPLE */}
            <FormControl
              variant="standard"
              sx={{
                minWidth: "200px",
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div style={{ height: "24px" }}></div>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <AppleIcon
                  sx={() => {
                    if (inputError.downloadsApple) {
                      return { color: "red" };
                    } else {
                      return { color: "white" };
                    }
                  }}
                />
                <TextField
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={inputError.downloadsApple}
                  name="downloadsApple"
                  onChange={(e) => handleChange(e)}
                />
              </Box>
            </FormControl>
            {/* TOTAL DOWNLOADS */}
            <FormControl
              variant="standard"
              sx={{
                minWidth: "200px",
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography>Total</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <DownloadIcon />
                <TextField
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  disabled
                  name="totalDownloads"
                  value={
                    Number(selectedData.downloadsAndroid) +
                    Number(selectedData.downloadsApple)
                  }
                  onChange={(e) => handleChange(e)}
                />
              </Box>
            </FormControl>
          </Box>
        </Box>
        <Button
          sx={{ backgroundColor: "#1a4971", color: "#aad4f5" }}
          onClick={handleClick}
        >
          I AM A BUTTON
        </Button>
      </Box>
    </Modal>
  );
}
