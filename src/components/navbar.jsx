import { Link, Outlet } from "react-router-dom";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import "./navbar.scss";

import { useState } from "react";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";

import Button from "@mui/material/Button";

export default function NavBar({ mode }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const breakpoint1 = useMediaQuery(theme.breakpoints.down("451"));
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    console.log(open);
    setOpen(open);
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: "50vw",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          fontSize: "30px",
          fontFamily: "Encode Sans Condensed",
          textTransform: "uppercase",
        }}
        className="list"
      >
        {["home", "charts", "about"].map((text) => (
          <ListItem
            key={text}
            disablePadding
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          >
            <Link
              className="nav-link"
              to={text === "home" ? "/" : `/${text}`}
              style={
                mode
                  ? { color: "white", textDecoration: "none" }
                  : { color: "black", textDecoration: "none" }
              }
            >
              {text}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <div className="navigation">
        {breakpoint1 ? (
          <Button>
            <MenuIcon
              sx={{ width: "100px", color: "#fff" }}
              onClick={toggleDrawer(true)}
            />
            <Drawer
              anchor="left"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  backgroundColor: "#1f2739",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                },
              }}
              sx={{ backdropFilter: "blur(5px)" }}
            >
              {list("left")}
            </Drawer>
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
