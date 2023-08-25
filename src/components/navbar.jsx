import { Link, Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import "./navbar.scss";
import SwitchTheme from "./switch/switch-theme";
export default function NavBar() {
  return (
    <>
      <div className="navigation">
        <Box className="nav-links-container">
          <Box></Box>
          <Box>
            <Link className="nav-link" to="/">
              HOME
            </Link>
            <Link className="nav-link" to="/charts">
              CHARTS
            </Link>
            <Link className="nav-link" to="/about">
              ABOUT
            </Link>
          </Box>
          <Box sx={{ width: "160px", height: "50px" }}>
            {" "}
            <SwitchTheme />
          </Box>
        </Box>
      </div>
      <Outlet />
    </>
  );
}
