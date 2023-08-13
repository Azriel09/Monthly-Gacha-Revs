import { DataGrid } from "@mui/x-data-grid";
import ChinaLogo from "../../assets/icons/china.svg";
import GlobalLogo from "../../assets/icons/global.svg";
import JapanLogo from "../../assets/icons/japan.svg";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import GenshinBG from "../../assets/banners/genshin.jpg";
import StarRailBG from "../../assets/banners/starrail.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Typography } from "@mui/material";
import Glass from "./glass";
import DnsIcon from "@mui/icons-material/Dns";
import clsx from "clsx";
import { useState } from "react";
import GameImageBanner from "./game-image";
export default function GachaTable() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [data, setData] = useState([
    {
      id: 0,
      name: "Genshin Impact",
      server: "global",
      downloadsAndroid: [2000000, 2000000],
      downloadsApple: [700000, 700000],
      revenueAndroid: [14000000, 14000000],
      revenueApple: [18000000, 18000000],
      totalDownloads: [2700000, 2700000],
      totalRevenue: [32000000, 32000000],
    },
    {
      id: 1,
      name: "Honkai Star Rail",
      server: "global",
      downloadsAndroid: [1000000, 1000000],
      downloadsApple: [600000, 700000],
      revenueAndroid: [19000000, 25000000],
      revenueApple: [22000000, 33000000],
      totalDownloads: [1600000, 1700000],
      totalRevenue: [60000000, 58000000],
    },
  ]);
  let currentYear = new Date().getFullYear();
  let currentMonth = months[new Date().getMonth() - 1];

  let previousMonth = months[new Date().getMonth() - 2];
  function ServerImage(server) {
    switch (server.value) {
      case "global":
        return (
          <img
            src={GlobalLogo}
            style={{ height: "50px", width: "50px", filter: "invert(1)" }}
          />
        );
        break;
      case "japan":
        return (
          <img src={JapanLogo} style={{ height: "50px", width: "50px" }} />
        );
        break;
      case "china":
        return (
          <img src={ChinaLogo} style={{ height: "50px", width: "50px" }} />
        );
        break;
    }
  }

  function GameImage(name) {
    return <GameImageBanner name={name.value} />;
  }

  const columnGroupingModel = [
    {
      groupId: currentMonth,
      headerAlign: "center",
      children: [
        {
          groupId: "Downloads",
          children: [
            { field: "currentDownloadsAndroid" },
            { field: "currentDownloadsApple" },
          ],
          headerAlign: "center",
        },
        {
          groupId: "Revenue ($)",
          children: [
            { field: "currentRevenueAndroid" },
            { field: "currentRevenueApple" },
          ],
          headerAlign: "center",
        },
        {
          groupId: "Total",
          children: [
            { field: "currentDownloads" },
            { field: "currentRevenue" },
          ],
          headerAlign: "center",
        },
      ],
    },
    {
      groupId: "June",
      headerAlign: "center",
      children: [
        {
          groupId: "Downloads",
          children: [
            { field: "previousDownloadsAndroid" },
            { field: "previousDownloadsApple" },
          ],
          headerAlign: "center",
        },
        {
          groupId: "Revenue ($)",
          children: [
            { field: "previousRevenueAndroid" },
            { field: "previousRevenueApple" },
          ],
          headerAlign: "center",
        },
        {
          groupId: "Total",
          children: [
            { field: "previousDownloads" },
            { field: "previousRevenue" },
          ],
          headerAlign: "center",
        },
      ],
    },
  ];
  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 0.06,
      editable: false,
      headerClassName: "table-header",
      renderCell: GameImage,
    },
    {
      field: "server",

      headerAlign: "center",
      align: "center",
      flex: 0.02,
      renderCell: ServerImage,
      headerClassName: "table-header",
      renderHeader: () => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <DnsIcon />
        </div>
      ),
    },
    // CURRENT MONTH
    // DOWNLOADS
    {
      field: "currentDownloadsAndroid",
      type: "number",
      flex: 0.025,
      align: "center",
      headerClassName: "table-header",
      headerAlign: "center",
      renderHeader: () => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <AndroidIcon />
        </div>
      ),
    },
    {
      field: "currentDownloadsApple",
      type: "number",
      flex: 0.025,

      align: "center",
      headerClassName: "table-header",
      headerAlign: "center",
      renderHeader: () => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <AppleIcon />
        </div>
      ),
    },

    // REVENUE
    {
      field: "currentRevenueAndroid",
      type: "number",
      flex: 0.025,
      headerAlign: "center",
      align: "center",
      headerClassName: "table-header",
      renderHeader: () => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <AndroidIcon />
        </div>
      ),
    },
    {
      field: "currentRevenueApple",
      type: "number",
      flex: 0.025,
      headerAlign: "center",
      align: "center",
      headerClassName: "table-header",
      renderHeader: () => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <AppleIcon />
        </div>
      ),
    },

    // TOTAL
    {
      field: "currentDownloads",
      type: "number",
      flex: 0.025,
      headerAlign: "center",
      align: "center",
      headerClassName: "table-header",
      renderHeader: () => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <DownloadIcon />
        </div>
      ),
      cellClassName: (params) => {
        let value = params.value;
        let id = params.id;
        let previousMonthValue = rows[id].previousDownloads;
        if (value == null) {
          return "";
        }
        return clsx("total-current-cell", {
          decrease: value < previousMonthValue,
          increase: value > previousMonthValue,
          nochange: value == previousMonthValue,
        });
      },
    },
    {
      field: "currentRevenue",
      type: "number",
      flex: 0.025,
      headerAlign: "center",
      align: "center",
      headerClassName: "table-header",
      renderHeader: () => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <AttachMoneyIcon />
        </div>
      ),
      cellClassName: (params) => {
        let value = params.value;
        let id = params.id;

        let previousMonthValue = rows[id].previousRevenue;

        if (value == null) {
          return "";
        }
        return clsx("total-current-cell", {
          decrease: value < previousMonthValue,
          increase: value > previousMonthValue,
          nochange: value == previousMonthValue,
        });
      },
    },

    // PREVIOUS MONTH
    // DOWNLOADS
    {
      field: "previousDownloadsAndroid",
      type: "number",
      flex: 0.025,
      align: "center",
      headerClassName: "table-header",
      headerAlign: "center",
      renderHeader: () => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <AndroidIcon />
        </div>
      ),
    },
    {
      field: "previousDownloadsApple",
      type: "number",
      flex: 0.025,

      align: "center",
      headerClassName: "table-header",
      headerAlign: "center",
      renderHeader: () => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <AppleIcon />
        </div>
      ),
    },

    // REVENUE
    {
      field: "previousRevenueAndroid",
      type: "number",
      flex: 0.025,
      headerAlign: "center",
      align: "center",
      headerClassName: "table-header",
      renderHeader: () => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <AndroidIcon />
        </div>
      ),
    },
    {
      field: "previousRevenueApple",
      type: "number",
      flex: 0.025,
      headerAlign: "center",
      align: "center",
      headerClassName: "table-header",
      renderHeader: () => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <AppleIcon />
        </div>
      ),
    },

    // TOTAL
    {
      field: "previousDownloads",
      type: "number",
      flex: 0.025,
      headerAlign: "center",
      align: "center",
      headerClassName: "table-header",
      renderHeader: () => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <DownloadIcon />
        </div>
      ),
    },
    {
      field: "previousRevenue",
      type: "number",
      flex: 0.025,
      headerAlign: "center",
      align: "center",
      headerClassName: "table-header",
      renderHeader: () => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <AttachMoneyIcon />
        </div>
      ),
    },
  ];

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

  return (
    <div style={{ height: 900, width: "100%" }}>
      <DataGrid
        rows={rows}
        disableRowSelectionOnClick
        columns={columns}
        rowHeight={90}
        experimentalFeatures={{ columnGrouping: true }}
        columnGroupingModel={columnGroupingModel}
        // Default sort by Current month's revenue
        initialState={{
          sorting: {
            sortModel: [{ field: "currentRevenue", sort: "desc" }],
          },
        }}
        sx={{
          color: "lightgray",
          fontFamily: "Enconde Sans Condensed",
          "& .MuiDataGrid-sortIcon": {
            opacity: 1,
            color: "lightgray",
          },

          // Changes font color if downloads & revenue increased/decreased/nochange compared to previous month
          "& .total-current-cell.increase": {
            color: "#90EE90",
            fontWeight: "600",
          },
          "& .total-current-cell.decrease": {
            color: "#FF0000",
            fontWeight: "600",
          },
          "& .total-current-cell.nochange": {
            color: "white",
            fontWeight: "600",
          },

          "& .MuiDataGrid-cellContent": {
            fontSize: "1.2em",
            padding: "0px",
          },
          "& .MuiDataGrid-cell--textLeft": {
            padding: "0px",
            position: "relative",
            borderRight: 1,
          },

          "& .MuiDataGrid-menuIconButton": {
            opacity: 1,
            color: "lightgray",
          },

          "& .css-yrdy0g-MuiDataGrid-columnHeaderRow": {
            backgroundColor: "#1C2133",
            textTransform: "uppercase",
            fontSize: "1.1em",
          },
          "& .MuiDataGrid-iconSeparator": {
            visibility: "hidden",
          },
          "& .MuiDataGrid-root": {
            outline: "none !imporant",
          },
          "& .MuiDataGrid-columnHeaderTitleContainer": {
            borderBottom: 0,
          },
        }}
      />
    </div>
  );
}
