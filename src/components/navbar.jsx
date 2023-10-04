import { Link, Outlet } from "react-router-dom";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import "./navbar.scss";

import { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";

import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const drawerWidth = 240;
export default function NavBar({ mode }) {
  const theme = useTheme();
  const breakpoint1 = useMediaQuery(theme.breakpoints.down("451"));

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        <Link
          className="nav-link"
          to="/"
          style={mode ? { color: "white" } : { color: "black" }}
        >
          HOME
        </Link>
        <Link
          className="nav-link"
          to="/charts"
          style={mode ? { color: "white" } : { color: "black" }}
        >
          CHARTS
        </Link>
        <Link
          className="nav-link"
          to="/about"
          style={mode ? { color: "white" } : { color: "black" }}
        >
          ABOUT
        </Link>
      </List>
    </Box>
  );

  return (
    <>
      <div className="navigation">
        {breakpoint1 ? (
          <Button>
            <MenuIcon sx={{ width: "100px", color: "#fff" }} />
          </Button>
        ) : (
          <Box className="nav-links-container">
            <Box sx={{ width: 160, height: 50 }}></Box>
            <Box>
              <Link
                className="nav-link"
                to="/"
                style={mode ? { color: "white" } : { color: "black" }}
              >
                HOME
              </Link>
              <Link
                className="nav-link"
                to="/charts"
                style={mode ? { color: "white" } : { color: "black" }}
              >
                CHARTS
              </Link>
              <Link
                className="nav-link"
                to="/about"
                style={mode ? { color: "white" } : { color: "black" }}
              >
                ABOUT
              </Link>
            </Box>
            <Box sx={{ width: "160px", height: "50px" }}></Box>
          </Box>
        )}
      </div>
      <Outlet />
    </>
  );
}
