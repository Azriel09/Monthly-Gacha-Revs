import React from "react";

export default function ThemeObject() {
  const theme = {
    darkmode: {
      home: { backgroundColor: "#1f2739" },
      table: {
        border: 0,
        borderRadius: "35px",
        WebkitFontSmoothing: "auto",
        letterSpacing: "normal",
        "& .MuiDataGrid-withBorderColor": {
          borderBottom: "1px solid #173f5f",
        },
        "& .MuiDataGrid-columnHeadersInner": {
          letterSpacing: "2px",
        },
        "& .MuiDataGrid-virtualScrollerContent": {
          backgroundColor: "#323c50",
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
          backgroundColor: "#2c3446",
          textTransform: "uppercase",
          fontSize: "1.1em",
        },
        "& .MuiDataGrid-columnHeader": { borderBottom: "none" },
        "& .MuiDataGrid-iconSeparator": {
          visibility: "hidden",
        },
        "& .MuiDataGrid-row": {
          padding: "2px 0",
          borderBottom: "1px solid #1f2739 ",
        },
      },
    },
    lightmode: {
      home: { backgroundColor: "#fff" },
      table: {
        border: 0,
        borderRadius: "35px",
        WebkitFontSmoothing: "auto",
        letterSpacing: "normal",
        color: "black",
        "& .MuiDataGrid-withBorderColor": {
          borderBottom: "1px solid #9e9e9e",
        },
        "& .MuiDataGrid-columnHeadersInner": {
          letterSpacing: "2px",
        },
        "& .MuiDataGrid-virtualScrollerContent": {
          backgroundColor: "#F2F3F5",
          fontFamily: "Open Sans",
          color: "black",
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
          backgroundColor: "#E3E5E8",
          textTransform: "uppercase",
          fontSize: "1.1em",
          color: "black",
        },
        "& .MuiDataGrid-columnHeader": { borderBottom: "none" },
        "& .MuiDataGrid-iconSeparator": {
          visibility: "hidden",
        },
        "& .MuiDataGrid-row": {
          padding: "2px 0",
          borderBottom: "1px solid #1f2739 ",
        },
      },
    },
  };
  return theme;
}
