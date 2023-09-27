import GenshinBG from "../../assets/banners/genshin.jpg";
import HonkaiBG from "../../assets/banners/honkai.jpg";
import StarRailBG from "../../assets/banners/starrail.jpg";
import FGOBG from "../../assets/banners/fgo.jpg";
import { ReactComponent as ChinaLogo } from "../../assets/icons/china.svg";
import { ReactComponent as JapanLogo } from "../../assets/icons/japan.svg";
import { ReactComponent as GlobalLogo } from "../../assets/icons/global.svg";
import "primereact/resources/primereact.css";
import "./gacha-table-styles.scss";
import "./formatting-styles.scss";
import { useState } from "react";

function TableTemplates() {
  const [selectedMonth, setSelectedMonth] = useState(0);

  const revenueAndroidTemplate = (rowData) => {
    const value = rowData.revenueAndroid[selectedMonth];
    if (!value) {
      return "-";
    }
    return formatCurrency(value);
  };

  const revenueAppleTemplate = (rowData) => {
    const value = rowData.revenueApple[selectedMonth];
    if (!value) {
      return "-";
    }
    return formatCurrency();
  };

  const downloadAndroidTemplate = (rowData) => {
    const value = rowData.downloadsAndroid[selectedMonth];
    if (!value) {
      return "-";
    }
    return value.toLocaleString();
  };
  const downloadAppleTemplate = (rowData) => {
    const value = rowData.downloadsApple[selectedMonth];
    if (!value) {
      return "-";
    }
    return value.toLocaleString();
  };
  const revenueAndroidTemplate2 = (rowData) => {
    const value = rowData.revenueAndroid[selectedMonth + 1];
    if (!value) {
      return "-";
    }
    return formatCurrency(value);
  };

  const revenueAppleTemplate2 = (rowData) => {
    const value = rowData.revenueApple[selectedMonth + 1];
    if (!value) {
      return "-";
    }
    return formatCurrency(value);
  };

  const downloadAndroidTemplate2 = (rowData) => {
    const value = rowData.downloadsAndroid[selectedMonth + 1];
    if (!value) {
      return "-";
    }
    return value.toLocaleString();
  };
  const downloadAppleTemplate2 = (rowData) => {
    const value = rowData.downloadsApple[selectedMonth + 1];
    if (!value) {
      return "-";
    }
    return value.toLocaleString();
  };

  // MAIN ROWS
  const formatDownloads = (rowData) => {
    const downloads = rowData.downloads;
    const downloads2 = rowData.downloads2;
    const formattedDownloads = downloads.toLocaleString();

    if (!downloads2) {
      return <span className="nochange value">{formattedDownloads}</span>;
    }
    if (downloads === downloads2) {
      return <span className="nochange value">{formattedDownloads}</span>;
    } else if (downloads > downloads2) {
      return <span className="increase value">{formattedDownloads}</span>;
    } else {
      return <span className="decrease value">{formattedDownloads}</span>;
    }
  };

  const formatDownloads2 = (rowData) => {
    const value = rowData.downloads2;
    if (!value) {
      return "-";
    }
    return value.toLocaleString();
  };

  const textColorRevenue = (rowData) => {
    const revenue = rowData.revenue;
    const revenue2 = rowData.revenue2;
    const value = formatCurrency(revenue);
    if (!revenue2) {
      return <span className="nochange value">{value}</span>;
    }
    if (revenue === revenue2) {
      return <span className="nochange value">{value}</span>;
    } else if (revenue > revenue2) {
      return <span className="increase value">{value}</span>;
    } else {
      return <span className="decrease value">{value}</span>;
    }
  };

  const textColorRevenue2 = (rowData) => {
    const value = rowData.revenue2;
    if (!value) {
      return "-";
    }
    return formatCurrency(value);
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