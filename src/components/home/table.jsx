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

  let currentYear = new Date().getFullYear();
  let currentMonth = months[new Date().getMonth()];
  console.log(currentMonth);
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
    switch (name.value) {
      case "Genshin Impact":
        return (
          <>
            <img
              src={GenshinBG}
              style={{
                objectFit: "fill",
                width: "300px",
                height: "115px",
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
              {name.value}
            </Typography>
          </>
        );
        break;
      case "Honkai Star Rail":
        return (
          <>
            <img
              src={StarRailBG}
              style={{ objectFit: "fill", width: "300px", height: "115px" }}
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
              {name.value}
            </Typography>
          </>
        );
        break;
    }
  }

  const columnGroupingModel = [
    {
      groupId: "July",
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
        let previousMonthValue = rows[id - 1].previousDownloads;

        if (value == null) {
          return "";
        }
        return clsx("total-current-cell", {
          decrease: value < previousMonthValue,
          increase: value > previousMonthValue,
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
        console.log(id);
        let previousMonthValue = rows[id - 1].previousRevenue;

        if (value == null) {
          return "";
        }
        return clsx("total-current-cell", {
          decrease: value < previousMonthValue,
          increase: value > previousMonthValue,
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

  const rows = [
    {
      id: 1,
      name: "Genshin Impact",
      server: "global",
      currentDownloadsAndroid: 2_000_000,
      currentDownloadsApple: 700_000,
      currentDownloads: 2_700_000,
      currentRevenueAndroid: 14_000_000,
      currentRevenueApple: 18_000_000,
      currentRevenue: 32_000_000,
      previousDownloadsAndroid: 2_000_000,
      previousDownloadsApple: 700_000,
      previousDownloads: 2_700_000,
      previousRevenueAndroid: 14_000_000,
      previousRevenueApple: 18_000_000,
      previousRevenue: 32_000_000,

      date: "july-2023",
    },
    {
      id: 2,
      name: "Honkai Star Rail",
      server: "global",
      currentDownloadsAndroid: 1_000_000,
      currentDownloadsApple: 600_000,
      currentDownloads: 1_600_000,
      currentRevenueAndroid: 19_000_000,
      currentRevenueApple: 22_000_000,
      currentRevenue: 41_000_000,
      previousDownloadsAndroid: 1_000_000,
      previousDownloadsApple: 700_000,
      previousDownloads: 1_700_000,
      previousRevenueAndroid: 25_000_000,
      previousRevenueApple: 33_000_000,
      previousRevenue: 58_000_000,
      date: "july-2023",
    },
  ];

  return (
    <div style={{ height: 900, width: "100%" }}>
      <DataGrid
        rows={rows}
        disableRowSelectionOnClick
        columns={columns}
        rowHeight={90}
        experimentalFeatures={{ columnGrouping: true }}
        columnGroupingModel={columnGroupingModel}
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
          "& .total-current-cell.increase": {
            backgroundColor: "rgba(157, 255, 118, 0.49)",
            color: "#1a3e72",
            fontWeight: "600",
          },
          "& .total-current-cell.decrease": {
            backgroundColor: "#d47483",
            color: "#1a3e72",
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
