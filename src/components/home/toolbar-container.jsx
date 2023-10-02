import { Toolbar } from "primereact/toolbar";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Fragment, useEffect, useState } from "react";
import { Button, ToggleButton, Typography } from "@mui/material";
export default function ToolbarContainer({
  showAll,
  setShowAll,

  filteredGames,
  setFilteredGames,
  handleShow,
  hiddenGames,
  setHiddenGames,
}) {
  const [buttonDisabled, setButtonDisabled] = useState();

  useEffect(() => {
    !hiddenGames || !hiddenGames.length
      ? setButtonDisabled(true)
      : setButtonDisabled(false);
  }, [hiddenGames]);

  // TOOLBAR TEMPLATE
  const leftToolbarTemplate = () => {
    return (
      <div style={{ minWidth: "100%" }}>
        <ToggleButton onClick={handleShow} sx={{ border: 0 }} value="show">
          {!showAll ? (
            <VisibilityOffIcon
              sx={{ color: "#16d6fa", width: "40px", height: "40px" }}
            />
          ) : (
            <RemoveRedEyeIcon
              sx={{ color: "#16d6fa", width: "40px", height: "40px" }}
            />
          )}
        </ToggleButton>
      </div>
    );
  };
  return (
    <Toolbar
      start={leftToolbarTemplate}
      style={{ padding: 0, border: 0 }}
    ></Toolbar>
  );
}
