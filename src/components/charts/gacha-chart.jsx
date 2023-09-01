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
    },
  ]);

  const headerGroup = (
    <ColumnGroup>
      <Row>
        <Column header="" rowSpan={2} />
        <Column header="Name" rowSpan={2} />
        <Column header="Server" rowSpan={2} />
        {/* <Column header="Downloads" colSpan={2} />
        <Column header="Revenue" colSpan={2} /> */}
        <Column header="Total" colSpan={2} />
      </Row>
      <Row>
        {/* <Column header="Android" sortable field="downloadsAndroid" />
        <Column header="Apple" sortable field="downloadsApple" />
        <Column header="Android" sortable field="revenueAndroid" />
        <Column header="Apple" sortable field="revenueApple" /> */}
        <Column header="Downloads" sortable field="downloads" />
        <Column header="Revenue" sortable field="revenue" />
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

  const header = renderHeader();
  const textColorRevenue = (rowData) => {
    if (rowData.revenue === 32000000) {
      return <div>{rowData.revenue}</div>;
    } else if (rowData.revenue > 32000000) {
      return <div style={{ color: "green" }}>{rowData.revenue}</div>;
    } else {
      return <div style={{ color: "red" }}>{rowData.revenue}</div>;
    }
  };
  const allowExpansion = (rowData) => {
    return rowData.orders.length > 0;
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
        scrollHeight="70vh"
        tableStyle={{
          minWidth: "100vw",
          fontSize: "1.2em",
        }}
      >
        <Column field="name" body={gameNameTemplate} />
        <Column field="name" />
        <Column field="server" />
        {/* <Column field="downloadsAndroid" />
        <Column field="downloadsApple" />
        <Column field="revenueAndroid" body={revenueAndroidTemplate} />
        <Column field="revenueApple" body={revenueAppleTemplate} /> */}
        <Column field="downloads" />
        <Column field="revenue" body={textColorRevenue} />
      </DataTable>
    </div>
  );
}
