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
import MonthsList from '../../months.json'
  export default function ModelContainer2({open, closeModal, data}) {
    const months = MonthsList.months
    return (
        <Modal keepMounted open={open} onClose={closeModal}>  
            <Box sx={{
            width: "90%",
            height: "90%",
            margin: "10vh auto 0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            backgroundColor: "#071426",
            flexWrap: "wrap",
            borderRadius: "20px",
            gap: "50px",
          }}>

       {     months.map((month, i) => {
                return (
                    <FormControl key={i}>
                        <Typography>{month}</Typography>
                        <TextField
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name={month}
                />
                    </FormControl>
                )
            })}
            </Box>
        </Modal>
    )
  }