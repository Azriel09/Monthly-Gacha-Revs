import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ColumnGroup } from "primereact/columngroup";
import { Row } from "primereact/row";
// import "./custom-primereact-table-theme.css";
import "primereact/resources/primereact.css";

import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import GetData from "../../hooks/data-fetch";
import GenshinBG from "../../assets/banners/genshin.jpg";
import "./gacha-chart.scss";
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
  const [gachaData, setGachaData] = useState([
    {
      id: 1,
      name: "Genshin Impact",
      server: "global",
      data: {
        July2023: {
          downloads: 2_700_000,
          revenue: 32000000,
          expandData: [
            {
              revenueAndroid: 14000000,
              revenueApple: 18000000,
              downloadsAndroid: 2000000,
              downloadsApple: 700000,
            },
          ],
        },
        June2023: {
          downloads: 2_700_000,
          revenue: 32000000,
          expandData: [
            {
              revenueAndroid: 14000000,
              revenueApple: 18000000,
              downloadsAndroid: 2000000,
              downloadsApple: 700000,
            },
          ],
        },
        May2023: {
          downloads: 2_700_000,
          revenue: 32000000,
          expandData: [
            {
              revenueAndroid: 14000000,
              revenueApple: 18000000,
              downloadsAndroid: 2000000,
              downloadsApple: 700000,
            },
          ],
        },
        April2023: {
          downloads: 2_700_000,
          revenue: 32000000,
          expandData: [
            {
              revenueAndroid: 14000000,
              revenueApple: 18000000,
              downloadsAndroid: 2000000,
              downloadsApple: 700000,
            },
          ],
        },
        March2023: {
          downloads: 2_700_000,
          revenue: 32000000,
          expandData: [
            {
              revenueAndroid: 14000000,
              revenueApple: 18000000,
              downloadsAndroid: 2000000,
              downloadsApple: 700000,
            },
          ],
        },
        February2023: {
          downloads: 2_700_000,
          revenue: 32000000,
          expandData: [
            {
              revenueAndroid: 14000000,
              revenueApple: 18000000,
              downloadsAndroid: 2000000,
              downloadsApple: 700000,
            },
          ],
        },
        January2023: {
          downloads: 2_700_000,
          revenue: 32000000,
          expandData: [
            {
              revenueAndroid: 14000000,
              revenueApple: 18000000,
              downloadsAndroid: 2000000,
              downloadsApple: 700000,
            },
          ],
        },
      },
    },
    {
      id: 1,
      name: "Genshin Impact",
      server: "global",
      data: {
        July2023: {
          downloads: 2_700_000,
          revenue: 32000000,
          expandData: [
            {
              revenueAndroid: 14000000,
              revenueApple: 18000000,
              downloadsAndroid: 2000000,
              downloadsApple: 700000,
            },
          ],
        },
        June2023: {
          downloads: 2_700_000,
          revenue: 32000000,
          expandData: [
            {
              revenueAndroid: 14000000,
              revenueApple: 18000000,
              downloadsAndroid: 2000000,
              downloadsApple: 700000,
            },
          ],
        },
      },
    },
    {
      id: 1,
      name: "Genshin Impact",
      server: "global",
      data: {
        July2023: {
          downloads: 2_700_000,
          revenue: 32000000,
          expandData: [
            {
              revenueAndroid: 14000000,
              revenueApple: 18000000,
              downloadsAndroid: 2000000,
              downloadsApple: 700000,
            },
          ],
        },
        June2023: {
          downloads: 2_700_000,
          revenue: 32000000,
          expandData: [
            {
              revenueAndroid: 14000000,
              revenueApple: 18000000,
              downloadsAndroid: 2000000,
              downloadsApple: 700000,
            },
          ],
        },
      },
    },
    {
      id: 1,
      name: "Genshin Impact",
      server: "global",
      data: {
        July2023: {
          downloads: 2_700_000,
          revenue: 32000000,
          expandData: [
            {
              revenueAndroid: 14000000,
              revenueApple: 18000000,
              downloadsAndroid: 2000000,
              downloadsApple: 700000,
            },
          ],
        },
        June2023: {
          downloads: 2_700_000,
          revenue: 32000000,
          expandData: [
            {
              revenueAndroid: 14000000,
              revenueApple: 18000000,
              downloadsAndroid: 2000000,
              downloadsApple: 700000,
            },
          ],
        },
      },
    },
  ]);
  const [games, setGames] = useState([
    {
      id: 1,
      name: "Genshin Impact",
      server: "global",

      downloads: 2_700_000,

      revenue: 32000000,
      date: "july-2023",
      expandData: [
        {
          revenueAndroid: 14000000,
          revenueApple: 18000000,
          downloadsAndroid: 2000000,
          downloadsApple: 700000,
        },
      ],
    },
    {
      id: 2,
      name: "Honkai Star Rail",
      server: "global",

      downloads: 1_600_000,

      revenue: 41000000,
      date: "july-2023",
      expandData: [
        {
          revenueAndroid: 19000000,
          revenueApple: 22000000,
          downloadsAndroid: 1000000,
          downloadsApple: 600000,
        },
      ],
    },
  ]);

  const dates = Object.entries(gachaData[0].data);
  const dualDates = dates * 2;
  const headerGroup = (
    <ColumnGroup>
      <Row>
        <Column header="" rowSpan={2} />
        <Column header="" rowSpan={2} />
        <Column header="Name" rowSpan={2} />
        <Column header="Server" rowSpan={2} />
        {dates.map((month) => {
          return <Column header={month[0]} colSpan={2} />;
        })}
      </Row>
      <Row>
        {dates.map((month, index) => {
          console.log(index);
          if (index % 2 === 0 || index === 0) {
            return <Column header="Downloads" sortable field="downloads" />;
          } else {
            return <Column header="Revenue" sortable field="revenue" />;
          }
        })}
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
  const revenueAndroidTemplate = (rowData) => {
    return `${formatCurrency(rowData.revenueAndroid)}`;
  };

  const revenueAppleTemplate = (rowData) => {
    return `${formatCurrency(rowData.revenueApple)}`;
  };

  const gameNameTemplate = (rowData) => {
    return (
      <div className="flex align-items-center">
        <img src={GenshinBG} width="200" />
      </div>
    );
  };

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const formatDownloads = (rowData) => {
    return Object.values(rowData.data)[0].downloads;
  };

  const textColorRevenue = (rowData) => {
    const revenue = Object.values(rowData.data)[0].revenue;
    const value = formatCurrency(revenue);

    if (revenue === 30000000) {
      return <div>{value}</div>;
    } else if (revenue > 30000000) {
      return <div style={{ color: "green" }}>{value}</div>;
    } else {
      return <div style={{ color: "red" }}>{value}</div>;
    }
  };

  const rowExpansionTemplate = (data) => {
    return (
      <div style={{ padding: "10px 50px 10px 200px" }}>
        <DataTable
          value={Object.values(data.data)[0].expandData}
          tableStyle={{
            overflow: "hidden",
            minHeight: "10vh",
          }}
        >
          <Column
            field="revenueAndroid"
            header="Revenue Android"
            body={revenueAndroidTemplate}
          ></Column>
          <Column
            field="revenueApple"
            header="Revenue Apple"
            body={revenueAppleTemplate}
          ></Column>
          <Column field="downloadsAndroid" header="Downloads Android"></Column>
          <Column field="downloadsApple" header="Downloads Apple"></Column>
        </DataTable>
      </div>
    );
  };
  const allowExpansion = (rowData) => {
    return Object.values(rowData.data)[0].expandData.length > 0;
  };

  const header = renderHeader();
  return (
    <div className="card">
      <DataTable
        size="small"
        stripedRows
        value={gachaData}
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
        <Column field="name" body={gameNameTemplate} />
        <Column field="name" />
        <Column field="server" />
        {/* <Column field="downloadsAndroid" />
        <Column field="downloadsApple" />
        <Column field="revenueAndroid" body={revenueAndroidTemplate} />
        <Column field="revenueApple" body={revenueAppleTemplate} /> */}
        <Column field="downloads" body={formatDownloads} />
        <Column
          field="revenue"
          body={textColorRevenue}
          headerStyle="text-align: right"
        />
      </DataTable>
    </div>
  );
}
