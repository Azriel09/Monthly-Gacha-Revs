import React, { useState, useEffect } from "react";
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
import "./gacha-table-styles.scss";
import Apple from "@mui/icons-material/Apple";
import { useMonthState } from "../../context/month-context";
import MonthSelector from "./month-selector";

import ToolbarContainer from "./toolbar-container";
export default function GachaTable({ filteredArray }) {
  const { selectedMonth } = useMonthState();
  const [showAll, setShowAll] = useState(false);
  const [gamesID, setGamesID] = useState();
  const [selectedGames, setSelectedGames] = useState(null);
  const [filteredGames, setFilteredGames] = useState(filteredArray);
  // COLUMN TEMPLATING/FORMATTING
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
  useEffect(() => {
    setFilteredGames(filteredArray);
  }, [selectedMonth]);

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

  // COLUMN HEADER FORMAT/TEMPLATE
  const headerGroup = (
    <ColumnGroup>
      <Row>
        <Column header="" rowSpan={2} />
        <Column header="" rowSpan={2} />
        <Column header="" rowSpan={2} />
        <Column header="Game" rowSpan={2} sortable sortField="name" />
        <Column header="Server" rowSpan={2} />

        <Column header={months[selectedMonth]} colSpan={2} />
        <Column header={months[selectedMonth + 1]} colSpan={2} />
      </Row>
      <Row>
        <Column header={<Download />} sortable field="downloads" />
        <Column header={<AttachMoneyIcon />} sortable field="revenue" />
        <Column header={<Download />} field="downloads2" sortable />
        <Column header={<AttachMoneyIcon />} field="revenue2" sortable />
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
    id: 4,
    name: "Honkai Impact 3rd",
    server: "global",
    downloads: [100000, 100000, 140000, 260000, 270000, 260000, 270000, 260000],
    revenue: [
      1500000, 1300000, 800000, 1300000, 1400000, 1900000, 3000000, 1700000,
    ],
    expandData: [
      {
        revenueAndroid: [
          800000, 700000, 400000, 700000, 700000, 1000000, 2000000, 1000000,
        ],
        revenueApple: [
          700000, 600000, 400000, 600000, 700000, 900000, 1000000, 700000,
        ],
        downloadsAndroid: [
          100000, 100000, 140000, 260000, 270000, 260000, 270000, 260000,
        ],
        downloadsApple: [
          40000, 40000, 40000, 60000, 70000, 60000, 70000, 60000,
        ],
      },
    ],
  };
  const handleSelectionChange = (e) => {
    const games_selected = e.value.map((game) => {
      return game.id;
    });
    setGamesID(games_selected);
    setSelectedGames(e.value);
  };

  const handleShow = () => {
    setShowAll(!showAll);
    const filter = filteredGames.filter((game) => !gamesID.includes(game.id));
    !showAll ? setFilteredGames(filteredArray) : setFilteredGames(filter);
  };

  return (
    <div className="card">
      <ToolbarContainer
        setShowAll={setShowAll}
        showAll={showAll}
        gamesID={gamesID}
        filteredGames={filteredGames}
        handleShow={handleShow}
        setFilteredGames={setFilteredGames}
      />
      <DataTable
        size="small"
        stripedRows
        value={filteredGames}
        headerColumnGroup={headerGroup}
        filters={filters}
        scrollable
        globalFilterFields={["name"]}
        header={header}
        expandedRows={expandedRows}
        selection={selectedGames}
        onSelectionChange={(e) => handleSelectionChange(e)}
        onRowToggle={(e) => setExpandedRows(e.data)}
        rowExpansionTemplate={rowExpansionTemplate}
        scrollHeight="80vh"
        tableStyle={{
          minWidth: "100vw",
          fontSize: "1.2em",
        }}
      >
        <Column selectionMode="multiple" exportable={true}></Column>
        <Column expander={allowExpansion} style={{ width: "5rem" }} />
        <Column
          field="name"
          body={gameNameTemplate}
          style={{ width: "200px" }}
        />
        <Column
          field="name"
          style={{ fontFamily: "Encode Sans Condensed" }}
          sortable
          sortField="name"
        />
        <Column field="server" body={serverTemplate} />
        <Column field="downloads" body={formatDownloads} align="center" />
        <Column field="revenue" body={textColorRevenue} align="center" />
        <Column field="downloads2" body={formatDownloads2} align="center" />
        <Column field="revenue2" body={textColorRevenue2} align="center" />
      </DataTable>
    </div>
  );
}
