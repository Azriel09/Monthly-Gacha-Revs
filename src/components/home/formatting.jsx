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
import { Typography, useMediaQuery, useTheme } from "@mui/material/";
import { useState } from "react";
import Glass from "./glass";

function TableTemplates() {
  const [selectedMonth, setSelectedMonth] = useState(0);
  const theme = useTheme();
  const breakpoint1 = useMediaQuery(theme.breakpoints.down("1231"));
  const breakpoint2 = useMediaQuery(theme.breakpoints.down("921"));
  const breakpoint3 = useMediaQuery(theme.breakpoints.down("841"));
  const breakpoint4 = useMediaQuery(theme.breakpoints.down("751"));
  const breakpoint5 = useMediaQuery(theme.breakpoints.down("541"));
  const breakpoint6 = useMediaQuery(theme.breakpoints.down("491"));
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
    return formatCurrency(value);
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
    const formattedDownloads = breakPointFormat(downloads).toLocaleString();

    if (!downloads2) {
      return (
        <div className="value-wrapper nochange">
          <span className=" value">{formattedDownloads}</span>
        </div>
      );
    }
    if (downloads === downloads2) {
      return (
        <div className="value-wrapper nochange">
          <span className=" value">{formattedDownloads}</span>
        </div>
      );
    } else if (downloads > downloads2) {
      return (
        <div className="value-wrapper increase">
          <span className=" value">{formattedDownloads}</span>
        </div>
      );
    } else {
      return (
        <div className="value-wrapper decrease">
          <span className=" value">{formattedDownloads}</span>
        </div>
      );
    }
  };

  const formatDownloads2 = (rowData) => {
    const value = breakPointFormat(rowData.downloads2);
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
      return (
        <div className="value-wrapper nochange">
          <span className=" value">{value}</span>
        </div>
      );
    }
    if (revenue === revenue2) {
      return (
        <div className="value-wrapper nochange">
          <span className=" value">{value}</span>
        </div>
      );
    } else if (revenue > revenue2) {
      return (
        <div className="value-wrapper increase">
          <span className=" value">{value}</span>
        </div>
      );
    } else {
      return (
        <div className="value-wrapper decrease">
          <span className=" value">{value}</span>
        </div>
      );
    }
  };

  const textColorRevenue2 = (rowData) => {
    const revenue = rowData.revenue2;

    if (!revenue) {
      return (
        <div className="value-wrapper">
          <span className=" value">-</span>
        </div>
      );
    } else {
      const value = formatCurrency(revenue);
      return (
        <div className="value-wrapper">
          <span className=" value">{value}</span>
        </div>
      );
    }
  };

  const formatCurrency = (value) => {
    const revenue = breakPointFormat(value);
    return revenue.toLocaleString();
  };

  const breakPointFormat = (value) => {
    if (breakpoint6) {
      if (value >= 1000000) {
        return (value / 1000000).toFixed(1) + "M";
      } else if (value >= 1000) {
        return (value / 1000).toFixed(1) + "K";
      } else {
        return value;
      }
    } else if (breakpoint5) {
      return value;
    } else if (breakpoint3) {
      if (value >= 1000000) {
        return (value / 1000000).toFixed(1) + "M";
      } else if (value >= 1000) {
        return (value / 1000).toFixed(1) + "K";
      } else {
        return value;
      }
    } else if (breakpoint2) {
      return value;
    } else if (breakpoint1) {
      if (value >= 1000000) {
        return (value / 1000000).toFixed(1) + "M";
      } else if (value >= 1000) {
        return (value / 1000).toFixed(1) + "K";
      } else {
        return value;
      }
    } else {
      return value;
    }
  };
  const gameNameTemplate = (rowData) => {
    if (breakpoint4) {
      switch (rowData.name) {
        case "Genshin Impact":
          return (
            <div className="game-banner-container">
              <Glass>
                <div className="game-banner-name">{rowData.name}</div>
              </Glass>
              <img src={GenshinBG} className="image" />
            </div>
          );
        case "Honkai Star Rail":
          return (
            <div className="game-banner-container">
              <Glass>
                <div className="game-banner-name">{rowData.name}</div>
              </Glass>
              <img src={StarRailBG} className="image" />
            </div>
          );
        case "Honkai Impact 3rd":
          return (
            <div className="game-banner-container">
              <Glass>
                <div className="game-banner-name">{rowData.name}</div>
              </Glass>
              <img src={HonkaiBG} className="image" />
            </div>
          );
        case "Fate/Grand Order":
          return (
            <div className="game-banner-container">
              <Glass>
                <div className="game-banner-name">{rowData.name}</div>
              </Glass>
              <img src={FGOBG} className="image" />
            </div>
          );
      }
    } else {
      switch (rowData.name) {
        case "Genshin Impact":
          return (
            <div className="game-banner-container">
              <img src={GenshinBG} width="250" alt="Genshin Impact" />
            </div>
          );
        case "Honkai Star Rail":
          return (
            <div className="game-banner-container">
              <img src={StarRailBG} width="250" alt="Honkai Star Rail" />
            </div>
          );
        case "Honkai Impact 3rd":
          return (
            <div className="game-banner-container">
              <img src={HonkaiBG} width="250" alt="Honkai Impact 3rd" />
            </div>
          );

        case "Fate/Grand Order":
          return (
            <div className="game-banner-container">
              <img src={FGOBG} width="250" alt="Fate/Grand Order" />
            </div>
          );
      }
    }
  };
  const serverTemplate = (rowData) => {
    switch (rowData.server) {
      case "global":
        return <GlobalLogo className="global server-logo" />;
      case "china":
        return <ChinaLogo className="server-logo" />;
      case "japan":
        return <JapanLogo className="server-logo" />;
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
