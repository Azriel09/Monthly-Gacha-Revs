import React, { useEffect, useState } from "react";
import GachaTable from "./table";
export default function GetData() {
  const [gachaGames, setGachaGames] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/games")
      .then((res) => res.json(res))
      .then((data) => {
        setGachaGames(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <React.Fragment>
      {gachaGames && <GachaTable fetchedData={gachaGames} />}
    </React.Fragment>
  );
}
