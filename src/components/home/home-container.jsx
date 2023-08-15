import { Box } from "@mui/material";
import "./home-container.scss";
import GetData from "./data-fetch";

export default function HomeContainer() {
  return (
    <div className="home-container">
      <GetData />
    </div>
  );
}
