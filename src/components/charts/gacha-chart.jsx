import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ColumnGroup } from "primereact/columngroup";
import { Row } from "primereact/row";
// import "./custom-primereact-table-theme.css";
import "primereact/resources/primereact.css";
import DownloadIcon from "@mui/icons-material/Download";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Download from "@mui/icons-material/Download";
import Android from "@mui/icons-material/Android";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import GetData from "../../hooks/data-fetch";
import {
  revenueAndroidTemplate,
  revenueAndroidTemplate2,
  downloadAndroidTemplate,
  downloadAndroidTemplate2,
  revenueAppleTemplate,
  revenueAppleTemplate2,
  downloadAppleTemplate,
  downloadAppleTemplate2,
  gameNameTemplate,
  formatDownloads,
  formatDownloads2,
  textColorRevenue,
  textColorRevenue2,
  serverTemplate,
} from "./formatting";
import "./gacha-chart.scss";

import Apple from "@mui/icons-material/Apple";
export default function ChartTable() {
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
  let currentMonth = months[new Date().getMonth() - 1];
  let previousMonth = months[new Date().getMonth() - 2];

  // FOR SEARCH
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    product: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  // FOR COLLAPSING/EXPANDING ROWS
  const [expandedRows, setExpandedRows] = useState(null);

  const expandAll = () => {
    let _expandedRows = {};

    products.forEach((p) => (_expandedRows[`${p.id}`] = true));

    setExpandedRows(_expandedRows);
  };

  const collapseAll = () => {
    setExpandedRows(null);
  };

  // REACT-QUERY
  // const { status, data, error, isFetching } = GetData();
  const [gameData, setGameData] = useState([
    {
      id: 1,
      name: "Genshin Impact",
      server: "global",
      downloads: [2900000, 2700000],
      revenue: [18000000, 32000000],
      expandData: [
        {
          revenueAndroid: [900000, 14000000],
          revenueApple: [18000000, 18000000],
          downloadsAndroid: [2000000, 2000000],
          downloadsApple: [15000000, 700000],
        },
      ],
    },
    {
      id: 2,
      name: "Honkai Star Rail",
      server: "global",
      downloads: [1600000, 1600000],
      revenue: [50000000, 41000000],
      expandData: [
        {
          revenueAndroid: [17000000, 19000000],
          revenueApple: [31000000, 22000000],
          downloadsAndroid: [1000000, 1000000],
          downloadsApple: [600000, 600000],
        },
      ],
    },
  ]);

  const headerGroup = (
    <ColumnGroup>
      <Row>
        <Column header="" rowSpan={2} />
        <Column header="" rowSpan={2} />
        <Column header="Name" rowSpan={2} />
        <Column header="Server" rowSpan={2} />

        <Column header="Month" colSpan={2} />
        <Column header="Month" colSpan={2} />
      </Row>
      <Row>
        <Column header={<Download />} sortable field="downloads" />
        <Column header={<AttachMoneyIcon />} sortable field="revenue" />
        <Column header={<Download />} sortable field="downloads" />
        <Column header={<AttachMoneyIcon />} sortable field="revenue" />
      </Row>
    </ColumnGroup>
  );
  const renderHeader = () => {
    return (
      <div className="flex justify-content-end">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Game Search"
          />
        </span>
      </div>
    );
  };
  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  // DATA FORMATTING

  const rowExpansionTemplate = (data) => {
    return (
      <div style={{}}>
        <DataTable
          value={data.expandData}
          tableStyle={{
            overflow: "hidden",
            minHeight: "10vh",
          }}
        >
          <Column
            field="revenueAndroid"
            header={
              <div>
                <AttachMoneyIcon />
                <Android />
              </div>
            }
            align="center"
            body={revenueAndroidTemplate}
          ></Column>
          <Column
            field="revenueApple"
            header={
              <div>
                <AttachMoneyIcon />
                <Apple />
              </div>
            }
            align="center"
            body={revenueAppleTemplate}
          ></Column>
          <Column
            field="downloadsAndroid"
            header={
              <div>
                <DownloadIcon />
                <Android />
              </div>
            }
            align="center"
            body={downloadAndroidTemplate}
          ></Column>
          <Column
            field="downloadsApple"
            header={
              <div>
                <DownloadIcon />
                <Apple />
              </div>
            }
            align="center"
            body={downloadAppleTemplate}
          ></Column>
          <Column header={<div>-----------</div>} />
          <Column
            field="revenueAndroid"
            header={
              <div>
                <AttachMoneyIcon />
                <Android />
              </div>
            }
            align="center"
            body={revenueAndroidTemplate2}
          ></Column>
          <Column
            field="revenueApple"
            header={
              <div>
                <AttachMoneyIcon />
                <Apple />
              </div>
            }
            align="center"
            body={revenueAppleTemplate2}
          ></Column>
          <Column
            field="downloadsAndroid"
            header={
              <div>
                <DownloadIcon />
                <Android />
              </div>
            }
            align="center"
            body={downloadAndroidTemplate2}
          ></Column>
          <Column
            field="downloadsApple"
            header={
              <div>
                <DownloadIcon />
                <Apple />
              </div>
            }
            align="center"
            body={downloadAppleTemplate2}
          ></Column>
        </DataTable>
      </div>
    );
  };
  const allowExpansion = (rowData) => {
    return rowData.expandData.length > 0;
  };

  const header = renderHeader();
  return (
    <div className="card">
      <DataTable
        size="small"
        stripedRows
        value={gameData}
        headerColumnGroup={headerGroup}
        filters={filters}
        scrollable
        globalFilterFields={["name"]}
        header={header}
        expandedRows={expandedRows}
        onRowToggle={(e) => setExpandedRows(e.data)}
        rowExpansionTemplate={rowExpansionTemplate}
        scrollHeight="70vh"
        tableStyle={{
          minWidth: "100vw",
          fontSize: "1.2em",
        }}
      >
        <Column expander={allowExpansion} style={{ width: "5rem" }} />
        <Column
          field="name"
          body={gameNameTemplate}
          style={{ width: "200px" }}
        />
        <Column field="name" />
        <Column field="server" body={serverTemplate} />
        <Column
          field="downloads"
          body={formatDownloads}
          sortable
          align="center"
        />
        <Column
          field="revenue"
          body={textColorRevenue}
          sortable
          align="center"
        />
        <Column
          field="downloads"
          body={formatDownloads2}
          sortable
          align="center"
        />
        <Column
          field="revenue"
          body={textColorRevenue2}
          sortable
          align="center"
        />
      </DataTable>
    </div>
  );
}
