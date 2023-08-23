import GetData from "../../hooks/data-fetch";
import { useQueryClient } from "@tanstack/react-query";

export default function GachaChart() {
  const { status, data, error, isFetching } = GetData();

  if (status === "loading") {
    return <h1>Loading</h1>;
  }
  const rows = data.map((game, index) => {
    return {
      id: index,
      name: game.name,
      server: game.server,
      currentDownloadsAndroid: game.downloadsAndroid[0],
      currentDownloadsApple: game.downloadsApple[0],
      currentDownloads: game.totalDownloads[0],
      currentRevenueAndroid: game.revenueAndroid[0],
      currentRevenueApple: game.revenueApple[0],
      currentRevenue: game.totalRevenue[0],
      previousDownloadsAndroid: game.downloadsAndroid[1],
      previousDownloadsApple: game.downloadsApple[1],
      previousDownloads: game.totalDownloads[1],
      previousRevenueAndroid: game.revenueAndroid[1],
      previousRevenueApple: game.revenueApple[1],
      previousRevenue: game.totalRevenue[1],
    };
  });
  if (status === "loading") {
    return <h1>Loading</h1>;
  }
}
