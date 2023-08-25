import React, { useState } from "react";
import GenshinBG from "../../assets/banners/genshin.jpg";
import StarRailBG from "../../assets/banners/starrail.jpg";
import Glass from "./glass";
import { Typography } from "@mui/material";

export default function GameImageBanner(props) {
  const game = props.name;

  function BGChanger(game) {
    switch (game) {
      case "Genshin Impact":
        return GenshinBG;

      case "Honkai Star Rail":
        return StarRailBG;
    }
  }
  return (
    <React.Fragment>
      <img
        src={BGChanger(game)}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      />
      <Glass />
      <Typography
        sx={{
          color: "white",
          position: "absolute",
          textAlign: "center",
          width: "100%",
          left: "0px",
          textShadow: "0 0 3px #000, 0 0 5px #0000FF",
          fontSize: "1.5em",
          letterSpacing: "2px",
          textTransform: "uppercase",
          fontFamily: "Encode Sans Condensed",
        }}
      >
        {game}
      </Typography>
    </React.Fragment>
  );
}
