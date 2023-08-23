import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import ChinaLogo from "../../assets/icons/china.svg";
import GlobalLogo from "../../assets/icons/global.svg";
import JapanLogo from "../../assets/icons/japan.svg";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import DownloadIcon from "@mui/icons-material/Download";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DnsIcon from "@mui/icons-material/Dns";
import clsx from "clsx";
import GameImageBanner from "./game-image";
import { styled } from "@mui/material/styles";
import "./table.scss";
import GetData from "../../hooks/data-fetch";
import Loading from "../loading";
import Cookies from "universal-cookie";
import { useState, useEffect } from "react";
export default function GachaTable() {
  // For Admin
  const cookies = new Cookies();
  const token = cookies.get("TOKEN");

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

  // React-query
  const { status, data, error, isFetching } = GetData();

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
      groupId: `${currentMonth} ${currentYear}`,
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
      groupId: `${previousMonth} ${currentYear}`,
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
      headerName: "Game",
      flex: 0.06,
      editable: false,
      headerClassName: "table-header",
      renderCell: GameImage,
      headerAlign: "center",
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
        return clsx("total-current-cell-revenue", {
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
  const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    border: 0,
    borderRadius: "15px",
    WebkitFontSmoothing: "auto",
    letterSpacing: "normal",
    "& .MuiDataGrid-withBorderColor": {
      borderBottom: "1px solid #113563",
    },
    "& .MuiDataGrid-columnHeadersInner": {
      letterSpacing: "2px",
    },
    "& .MuiDataGrid-virtualScrollerContent": {
      backgroundColor: "#071426",
      fontFamily: "Open Sans",
    },

    "& .MuiDataGrid-cellContent": {
      fontSize: "1.2em",
    },
    // For game banner to utilize the whole cell
    "& .MuiDataGrid-cell--textLeft": {
      padding: "0px",
      position: "relative",
    },
    "& .css-yrdy0g-MuiDataGrid-columnHeaderRow": {
      backgroundColor: "#071426",
      textTransform: "uppercase",
      fontSize: "1.1em",
    },
    "& .MuiDataGrid-columnHeader": { borderBottom: "none" },
    "& .MuiDataGrid-iconSeparator": {
      visibility: "hidden",
    },
  }));

  if (status === "loading") {
    return <Loading />;
  } else if (error) {
    return <h1>Error LUL</h1>;
  }

  // will only run if the loading status is finished or else mapping data will result an error
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
      <StyledDataGrid
        rows={rows}
        columns={columns}
        rowHeight={75}
        experimentalFeatures={{ columnGrouping: true }}
        columnGroupingModel={columnGroupingModel}
        disableRowSelectionOnClick
        disableColumnMenu
        disableColumnFilter
        // For export and search function
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        // Default sort by Current month's revenue
        initialState={{
          sorting: {
            sortModel: [{ field: "currentRevenue", sort: "desc" }],
          },
        }}
        sx={{
          color: "lightgray",
        }}
      />
    </div>
  );
}
