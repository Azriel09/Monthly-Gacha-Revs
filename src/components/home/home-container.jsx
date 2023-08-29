import { Box } from "@mui/material";
import "./home-container.scss";
import GetData from "../../hooks/data-fetch";
import GachaTable from "./table";

export default function HomeContainer({ theme, mode }) {
  console.log("Home render");
  return (
    <div className="home-container">
      <GachaTable theme={theme} mode={mode} />
    </div>
  );
}
