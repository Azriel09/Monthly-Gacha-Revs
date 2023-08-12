import { DataGrid } from "@mui/x-data-grid";
import ChinaLogo from "../../assets/icons/china.svg";
import GlobalLogo from "../../assets/icons/global.svg";
import JapanLogo from "../../assets/icons/japan.svg";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import GenshinBG from "../../assets/banners/genshin.jpg";
import StarRailBG from "../../assets/banners/starrail.jpg";
import { useState } from "react";
import { Typography } from "@mui/material";
import Glass from "./glass";
import DnsIcon from "@mui/icons-material/Dns";
export default function GachaTable() {
  const [month, setMonth] = useState("");

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
      groupId: "Downloads",
      children: [{ field: "downloadsAndroid" }, { field: "downloadsApple" }],
      headerAlign: "center",
    },
    {
      groupId: "Revenue",
      children: [{ field: "revenueAndroid" }, { field: "revenueApple" }],
      headerAlign: "center",
    },
    {
      groupId: "Total",
      children: [{ field: "downloads" }, { field: "revenues" }],
      headerAlign: "center",
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
      flex: 0.03,
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
    // DOWNLOADS
    {
      field: "downloadsAndroid",
      type: "number",
      flex: 0.04,
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
      field: "downloadsApple",
      type: "number",
      flex: 0.04,

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
      field: "revenueAndroid",
      type: "number",
      flex: 0.04,
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
          ($)
          <AndroidIcon />
        </div>
      ),
    },
    {
      field: "revenueApple",
      type: "number",
      flex: 0.04,
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
          ($)
          <AppleIcon />
        </div>
      ),
    },

    // TOTAL
    {
      field: "downloads",
      type: "number",
      flex: 0.04,
      headerAlign: "center",
      align: "center",
      headerClassName: "table-header",
      headerName: "Downloads",
    },
    {
      field: "revenues",
      type: "number",
      flex: 0.04,
      headerAlign: "center",
      align: "center",
      headerClassName: "table-header",
      headerName: "Revenue ($)",
    },
  ];

  const rows = [
    {
      id: 1,
      name: "Genshin Impact",
      server: "global",
      downloadsAndroid: 2_000_000,
      downloadsApple: 700_000,
      downloads: 2_700_000,
      revenueAndroid: 14_000_000,
      revenueApple: 18_000_000,
      revenues: 32_000_000,

      date: "july-2023",
    },
    {
      id: 2,
      name: "Honkai Star Rail",
      server: "global",
      downloadsAndroid: 1_000_000,
      downloadsApple: 600_000,
      downloads: 1_600_000,
      revenueAndroid: 19_000_000,
      revenueApple: 22_000_000,
      revenues: 41_000_000,

      date: "july-2023",
    },
  ];

  return (
    <div style={{ height: 900, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowHeight={115}
        experimentalFeatures={{ columnGrouping: true }}
        columnGroupingModel={columnGroupingModel}
        initialState={{
          sorting: {
            sortModel: [{ field: "revenues", sort: "desc" }],
          },
        }}
        sx={{
          color: "lightgray",
          "& .MuiDataGrid-sortIcon": {
            opacity: 1,
            color: "lightgray",
          },

          "& .MuiDataGrid-cellContent": {
            fontSize: "1.2em",
            padding: "0px",
          },
          "& .MuiDataGrid-cell--textLeft": {
            padding: "0px",
            position: "relative",
          },

          "& .MuiDataGrid-menuIconButton": {
            opacity: 1,
            color: "lightgray",
          },

          "& .css-yrdy0g-MuiDataGrid-columnHeaderRow": {
            backgroundColor: "#1C2133",
            textTransform: "uppercase",
            fontSize: "1.2em",
          },
          "& .MuiDataGrid-virtualScrollerRenderZone": {
            fontSize: "1.3em",
          },
        }}
      />
    </div>
  );
}
