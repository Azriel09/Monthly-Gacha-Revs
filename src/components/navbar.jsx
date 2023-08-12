import { Link, Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import "./navbar.scss";
export default function NavBar() {
  return (
    <>
      <div className="navigation">
        <Box className="nav-links-container">
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
      </div>
      <Outlet />
    </>
  );
}
