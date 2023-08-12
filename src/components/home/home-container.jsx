import { Box } from "@mui/material";
import "./home-container.scss";
import GachaTable from "./table";

export default function HomeContainer() {
  return (
    <div className="home-container">
      <GachaTable />
    </div>
  );
}
