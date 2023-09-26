import GenshinBG from "../../assets/banners/genshin.jpg";
import HonkaiBG from "../../assets/banners/honkai.jpg";
import StarRailBG from "../../assets/banners/starrail.jpg";
import FGOBG from "../../assets/banners/fgo.jpg";
import { ReactComponent as ChinaLogo } from "../../assets/icons/china.svg";
import { ReactComponent as JapanLogo } from "../../assets/icons/japan.svg";
import { ReactComponent as GlobalLogo } from "../../assets/icons/global.svg";
import "primereact/resources/primereact.css";
import "./gacha-chart.scss";
import "./formatting-styles.scss";
import { useState } from "react";
import { useMonthState } from "../../context/month-context";
// import { useMonthState } from "../../context/month-context";

function TableTemplates() {
  const { selectedMonth, setSelectedMonth } = useMonthState();

  // ROWS EXPANDED
  const revenueAndroidTemplate = (rowData) => {
    return formatCurrency(rowData.revenueAndroid[selectedMonth]);
  };

  const revenueAppleTemplate = (rowData) => {
    return formatCurrency(rowData.revenueApple[selectedMonth]);
  };

  const downloadAndroidTemplate = (rowData) => {
    return rowData.downloadsAndroid[selectedMonth].toLocaleString();
  };
  const downloadAppleTemplate = (rowData) => {
    return rowData.downloadsApple[selectedMonth].toLocaleString();
  };
  const revenueAndroidTemplate2 = (rowData) => {
    return formatCurrency(rowData.revenueAndroid[selectedMonth + 1]);
  };

  const revenueAppleTemplate2 = (rowData) => {
    return formatCurrency(rowData.revenueApple[selectedMonth + 1]);
  };

  const downloadAndroidTemplate2 = (rowData) => {
    return rowData.downloadsAndroid[selectedMonth + 1].toLocaleString();
  };
  const downloadAppleTemplate2 = (rowData) => {
    return rowData.downloadsApple[selectedMonth + 1].toLocaleString();
  };

  // MAIN ROWS
  const formatDownloads = (rowData) => {
    const downloads = rowData.downloads[selectedMonth];
    const downloads2 = rowData.downloads[selectedMonth + 1];
    const formattedDownloads = downloads.toLocaleString();

    if (downloads === downloads2) {
      return (
        <div>
          <span className="nochange value">{formattedDownloads}</span>
        </div>
      );
    } else if (downloads > downloads2) {
      return (
        <div>
          <span className="increase value">{formattedDownloads}</span>
        </div>
      );
    } else {
      return (
        <div>
          <span className="decrease value">{formattedDownloads}</span>
        </div>
      );
    }
  };

  const formatDownloads2 = (rowData) => {
    const downloads = rowData.downloads[selectedMonth + 1].toLocaleString();
    return downloads;
  };

  const textColorRevenue = (rowData) => {
    const revenue = rowData.revenue[selectedMonth];
    const revenue2 = rowData.revenue[selectedMonth + 1];
    const value = formatCurrency(revenue);

    if (revenue === revenue2) {
      return (
        <div>
          <span className="nochange value">{value}</span>
        </div>
      );
    } else if (revenue > revenue2) {
      return (
        <div>
          <span className="increase value">{value}</span>
        </div>
      );
    } else {
      return (
        <div>
          <span className="decrease value">{value}</span>
        </div>
      );
    }
  };

  const textColorRevenue2 = (rowData) => {
    const value2 = formatCurrency(rowData.revenue[selectedMonth + 1]);
    return value2;
  };

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const gameNameTemplate = (rowData) => {
    switch (rowData.name) {
      case "Genshin Impact":
        return <img src={GenshinBG} width="250" />;
      case "Honkai Star Rail":
        return <img src={StarRailBG} width="250" />;
      case "Honkai Impact 3rd":
        return <img src={HonkaiBG} width="250" />;

      case "Fate/Grand Order":
        return <img src={FGOBG} width="250" />;
    }
  };
  const serverTemplate = (rowData) => {
    switch (rowData.server) {
      case "global":
        return (
          <GlobalLogo
            style={{ filter: "invert()", width: "50px", height: "50px" }}
          />
        );
      case "china":
        return <ChinaLogo style={{ width: "50px", height: "50px" }} />;
      case "japan":
        return <JapanLogo style={{ width: "50px", height: "50px" }} />;
    }
  };

  return {
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
  };
}

export default TableTemplates;
