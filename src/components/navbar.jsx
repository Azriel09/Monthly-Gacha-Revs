import { Link, Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import "./navbar.scss";

import { useState } from "react";
export default function NavBar({ mode }) {
  const [darkmode, setDarkmode] = useState(mode);
  return (
    <>
      <div className="navigation">
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
      </div>
      <Outlet />
    </>
  );
}
