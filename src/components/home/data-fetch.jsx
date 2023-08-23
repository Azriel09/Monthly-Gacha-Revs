import React, { useEffect, useState } from "react";
import GachaTable from "./table";
import Loading from "../loading";
import { useQuery } from "@tanstack/react-query";

export default function GetData() {
  // const [gachaGames, setGachaGames] = useState();
  // const [isLoading, setIsLoading] = useState(true);
  // const months = ["July 2023", "June 2023", "May 2023"];

  // useEffect(() => {
  //   console.log("isFetching");
  //   fetch("http://localhost:8000/games")
  //     .then((res) => res.json(res))
  //     .then((data) => {
  //       setGachaGames(data);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);

  function fetchData() {
    return useQuery({
      queryKey: ["games"],
      queryFn: () => {
        const data = fetch("http://localhost:8000/games").then((res) =>
          res.json(res).then((resdata) => {
            return resdata;
          })
        );

        return data;
      },
    });
  }

  const { status, data, error, isFetching } = fetchData();

  return (
    <React.Fragment>
      {status === "loading" ? (
        <Loading />
      ) : status === "error" ? (
        <h2>Error</h2>
      ) : (
        <GachaTable fetchedData={data} />
      )}
    </React.Fragment>
  );
}
