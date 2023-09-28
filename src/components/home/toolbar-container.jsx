import { Toolbar } from "primereact/toolbar";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Fragment } from "react";
import { Button, ToggleButton } from "@mui/material";
export default function ToolbarContainer({
  showAll,
  setShowAll,
  gamesID,
  filteredGames,
  setFilteredGames,
  handleShow,
}) {
  const handleDelete = () => {
    const filter = filteredGames.filter((game) => !gamesID.includes(game.id));
    setFilteredGames(filter);
  };
  // TOOLBAR TEMPLATE
  const leftToolbarTemplate = () => {
    return (
      <Fragment>
        <ToggleButton onClick={handleShow} sx={{ border: 0 }}>
          {!showAll ? (
            <VisibilityOffIcon sx={{ color: "#16d6fa" }} />
          ) : (
            <RemoveRedEyeIcon sx={{ color: "#16d6fa" }} />
          )}
        </ToggleButton>
        <Button onClick={handleDelete} disabled={!gamesID || !gamesID.length}>
          DELETE
        </Button>
      </Fragment>
    );
  };
  return <Toolbar start={leftToolbarTemplate}></Toolbar>;
}
