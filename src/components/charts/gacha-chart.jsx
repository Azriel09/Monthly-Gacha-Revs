import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ColumnGroup } from "primereact/columngroup";
import { Row } from "primereact/row";

import "primereact/resources/primereact.css";
import DownloadIcon from "@mui/icons-material/Download";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Download from "@mui/icons-material/Download";
import Android from "@mui/icons-material/Android";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import GetData from "../../hooks/data-fetch";
import TableTemplates from "./formatting";
import "./gacha-chart.scss";
import Apple from "@mui/icons-material/Apple";
import { useMonthState } from "../../context/month-context";
import MonthSelector from "./month-selector";
import Loading from "../loading";
export default function ChartTable() {
  // TEMPLATING/FORMATTING
  const {
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
  } = TableTemplates();
  const months = [
    "August 2023",
    "July 2023",
    "June 2023",
    "May 2023",
    "April 2023",
    "March 2023",
    "February 2023",
    "January 2023",
  ];
  const { selectedMonth, setSelectedMonth } = useMonthState();

  // FOR SEARCH FEATURE
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    product: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const renderHeader = () => {
    return (
      <div className="table-header">
        <InputText
          value={globalFilterValue}
          onChange={onGlobalFilterChange}
          placeholder="Game Search"
        />
        <div className="select">
          <h3>Select Month</h3>
          <MonthSelector />
        </div>
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

  // FOR COLLAPSING/EXPANDING ROWS
  const [expandedRows, setExpandedRows] = useState(null);

  // REACT-QUERY
  const { status, data, error, isFetching } = GetData();
  if (status === "loading") {
    return <Loading />;
  }

  const filteredData = data.filter(function (el) {
    const threshold = selectedMonth + 1;

    return el.downloads.length > threshold;
  });

  console.log(filteredData);
  // COLUMN HEADER FORMAT/TEMPLATE
  const headerGroup = (
    <ColumnGroup>
      <Row>
        <Column header="" rowSpan={2} />
        <Column header="" rowSpan={2} />
        <Column header="Game" rowSpan={2} />
        <Column header="Server" rowSpan={2} />

        <Column header={months[selectedMonth]} colSpan={2} />
        <Column header={months[selectedMonth + 1]} colSpan={2} />
      </Row>
      <Row>
        <Column header={<Download />} sortable field="downloads" />
        <Column header={<AttachMoneyIcon />} sortable field="revenue" />
        <Column header={<Download />} sortable field="downloads" />
        <Column header={<AttachMoneyIcon />} sortable field="revenue" />
      </Row>
    </ColumnGroup>
  );

  // EXPANDED COLUMN GROUP HEADER FORMAT/TEMPLATE
  const rowExpansionHeaderGroup = (
    <ColumnGroup>
      <Row>
        <Column header={months[selectedMonth]} colSpan={4} />
        <Column header="" />
        <Column header={months[selectedMonth + 1]} colSpan={4} />
      </Row>
      <Row>
        <Column
          field="revenueAndroid"
          header={
            <div>
              <AttachMoneyIcon />
              <Android />
            </div>
          }
          style={{ width: "10%" }}
        ></Column>
        <Column
          field="revenueApple"
          header={
            <div>
              <AttachMoneyIcon />
              <Apple />
            </div>
          }
          style={{ width: "10%" }}
        ></Column>
        <Column
          field="downloadsAndroid"
          header={
            <div>
              <DownloadIcon />
              <Android />
            </div>
          }
          style={{ width: "10%" }}
        ></Column>
        <Column
          field="downloadsApple"
          header={
            <div>
              <DownloadIcon />
              <Apple />
            </div>
          }
          style={{ width: "10%" }}
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
          style={{ width: "10%" }}
        ></Column>
        <Column
          field="revenueApple"
          header={
            <div>
              <AttachMoneyIcon />
              <Apple />
            </div>
          }
          style={{ width: "10%" }}
        ></Column>
        <Column
          field="downloadsAndroid"
          header={
            <div>
              <DownloadIcon />
              <Android />
            </div>
          }
          style={{ width: "10%" }}
        ></Column>
        <Column
          field="downloadsApple"
          header={
            <div>
              <DownloadIcon />
              <Apple />
            </div>
          }
          style={{ width: "10%" }}
        ></Column>
      </Row>
    </ColumnGroup>
  );
  // EXPANDED COLUMN HEADER FORMAT/TEMPLATE
  const rowExpansionTemplate = (data) => {
    return (
      <div>
        <DataTable
          headerColumnGroup={rowExpansionHeaderGroup}
          value={data.expandData}
          tableStyle={{
            overflow: "hidden",
            minHeight: "10vh",
          }}
        >
          <Column
            field="revenueAndroid"
            body={revenueAndroidTemplate}
            align="center"
          ></Column>
          <Column
            field="revenueApple"
            body={revenueAppleTemplate}
            align="center"
          ></Column>
          <Column
            field="downloadsAndroid"
            body={downloadAndroidTemplate}
            align="center"
          ></Column>
          <Column
            field="downloadsApple"
            body={downloadAppleTemplate}
            align="center"
          ></Column>
          <Column />
          <Column
            field="revenueAndroid"
            body={revenueAndroidTemplate2}
            align="center"
          ></Column>
          <Column
            field="revenueApple"
            body={revenueAppleTemplate2}
            align="center"
          ></Column>
          <Column
            field="downloadsAndroid"
            body={downloadAndroidTemplate2}
            align="center"
          ></Column>
          <Column
            field="downloadsApple"
            body={downloadAppleTemplate2}
            align="center"
          ></Column>
        </DataTable>
      </div>
    );
  };
  // WILL ONLY ALLOW EXPANSION IF THERE'S DATA IN THE ASSIGNED SOURCE OF ROW EXPANSION DATA
  const allowExpansion = (rowData) => {
    return rowData.expandData.length > 0;
  };

  const header = renderHeader();
  const osafg = {
    id: 3,
    name: "Fate/Grand Order",
    server: "japan",
    downloads: [130000, 120000, 110000, 210000, 120000, 120000, 120000, 120000],
    revenue: [
      56000000, 27000000, 23000000, 29000000, 30000000, 21000000, 47000000,
      37000000,
    ],
    expandData: [
      {
        revenueAndroid: [
          17000000, 13000000, 11000000, 14000000, 12000000, 11000000, 23000000,
          19000000,
        ],
        revenueApple: [
          39000000, 14000000, 12000000, 15000000, 18000000, 10000000, 24000000,
          18000000,
        ],
        downloadsAndroid: [
          100000, 100000, 100000, 200000, 100000, 100000, 100000, 100000,
        ],
        downloadsApple: [
          30000, 20000, 10000, 10000, 20000, 20000, 20000, 20000,
        ],
      },
    ],
  };
  return (
    <div className="card">
      <DataTable
        size="small"
        lazy
        stripedRows
        value={filteredData}
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
        <Column field="name" style={{ fontFamily: "Encode Sans Condensed" }} />
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
