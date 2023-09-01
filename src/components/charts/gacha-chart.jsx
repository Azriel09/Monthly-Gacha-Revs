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
export default function ChartTable() {
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

  const [games] = useState([
    {
      id: 1,
      name: "Genshin Impact",
      server: "global",
      downloadsAndroid: 2_000_000,
      downloadsApple: 700_000,
      downloads: 2_700_000,
      revenueAndroid: 14000000,
      revenueApple: 18000000,
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
      downloadsAndroid: 1_000_000,
      downloadsApple: 600_000,
      downloads: 1_600_000,
      revenueAndroid: 19000000,
      revenueApple: 22000000,
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

  const headerGroup = (
    <ColumnGroup>
      <Row>
        <Column header="" />
        <Column header="" />
        <Column header="Name" />
        <Column header="Server" />
        <Column header="Downloads" sortable field="downloads" />
        <Column header="Revenue" sortable field="revenue" />
        {/* <Column header="Downloads" colSpan={2} />
        <Column header="Revenue" colSpan={2} /> */}
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
    return rowData.downloads.toLocaleString();
  };
  const header = renderHeader();
  const textColorRevenue = (rowData) => {
    const value = formatCurrency(rowData.revenue);

    if (rowData.revenue === 32000000) {
      return <div>{value}</div>;
    } else if (rowData.revenue > 32000000) {
      return <div style={{ color: "green" }}>{value}</div>;
    } else {
      return <div style={{ color: "red" }}>{value}</div>;
    }
  };

  const rowExpansionTemplate = (data) => {
    return (
      <div className="p-3">
        <DataTable
          value={data.expandData}
          tableStyle={{
            overflow: "hidden",
            minHeight: "15vh",
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
    return rowData.expandData.length > 0;
  };
  return (
    <div className="card">
      <DataTable
        size="small"
        value={games}
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
        <Column field="revenue" body={textColorRevenue} />
      </DataTable>
    </div>
  );
}
