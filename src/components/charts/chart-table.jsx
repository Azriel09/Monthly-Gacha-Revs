import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ColumnGroup } from "primereact/columngroup";
import { Row } from "primereact/row";

export default function ChartTable() {
  const [sales] = useState([
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

  const downloadsAndroidTemplate = (rowData) => {
    return rowData.downloadsAndroid;
  };

  const downloadsAppleTemplate = (rowData) => {
    return rowData.downloadsApple;
  };

  const revenueAndroidTemplate = (rowData) => {
    return `${formatCurrency(rowData.revenueAndroid)}`;
  };

  const revenueAppleTemplate = (rowData) => {
    return `${formatCurrency(rowData.revenueApple)}`;
  };
  const downloadsTemplate = (rowData) => {
    return rowData.downloads;
  };
  const revenueTemplate = (rowData) => {
    return `${formatCurrency(rowData.revenue)}`;
  };
  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const headerGroup = (
    <ColumnGroup>
      <Row>
        <Column header="Name" rowSpan={2} />
        <Column header="Server" rowSpan={2} />
        <Column header="Downloads" colSpan={2} />
        <Column header="Revenue" colSpan={2} />
        <Column header="Total" colSpan={2} />
      </Row>
      <Row>
        <Column header="Android" sortable field="downloadsAndroid" />
        <Column header="Apple" sortable field="downloadsApple" />
        <Column header="Android" sortable field="revenueAndroid" />
        <Column header="Apple" sortable field="revenueApple" />
        <Column header="Downloads" sortable field="downloads" />
        <Column header="Revenue" sortable field="revenue" />
      </Row>
    </ColumnGroup>
  );

  return (
    <div>
      <DataTable
        value={sales}
        headerColumnGroup={headerGroup}
        tableStyle={{ minWidth: "80rem" }}
        stripedRows
      >
        <Column field="name" />
        <Column field="server" />
        <Column field="downloadsAndroid" body={downloadsAndroidTemplate} />
        <Column field="downloadsApple" body={downloadsAppleTemplate} />
        <Column field="revenueAndroid" body={revenueAndroidTemplate} />
        <Column field="revenueApple" body={revenueAppleTemplate} />
        <Column field="downloads" body={downloadsTemplate} />
        <Column field="revenue" body={revenueTemplate} />
      </DataTable>
    </div>
  );
}
