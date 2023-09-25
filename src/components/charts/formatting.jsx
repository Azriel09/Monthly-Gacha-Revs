import GenshinBG from "../../assets/banners/genshin.jpg";
import HonkaiBG from "../../assets/banners/honkai.jpg";
import StarRailBG from "../../assets/banners/starrail.jpg";
import { ReactComponent as ChinaLogo } from "../../assets/icons/china.svg";
import { ReactComponent as JapanLogo } from "../../assets/icons/japan.svg";
import { ReactComponent as GlobalLogo } from "../../assets/icons/global.svg";
import "primereact/resources/primereact.css";
import "./gacha-chart.scss";
export const revenueAndroidTemplate = (rowData) => {
  return formatCurrency(rowData.revenueAndroid[0]);
};

export const revenueAppleTemplate = (rowData) => {
  return formatCurrency(rowData.revenueApple[0]);
};

export const downloadAndroidTemplate = (rowData) => {
  return rowData.downloadsAndroid[0].toLocaleString();
};
export const downloadAppleTemplate = (rowData) => {
  return rowData.downloadsApple[1].toLocaleString();
};
export const revenueAndroidTemplate2 = (rowData) => {
  return formatCurrency(rowData.revenueAndroid[1]);
};

export const revenueAppleTemplate2 = (rowData) => {
  return formatCurrency(rowData.revenueApple[0]);
};

export const downloadAndroidTemplate2 = (rowData) => {
  return rowData.downloadsAndroid[1].toLocaleString();
};
export const downloadAppleTemplate2 = (rowData) => {
  return rowData.downloadsApple[1].toLocaleString();
};

export const formatDownloads = (rowData, index) => {
  const downloads = rowData.downloads[0];
  const downloads2 = rowData.downloads[1];
  const formattedDownloads = downloads.toLocaleString();

  if (downloads === downloads2) {
    return <div>{formattedDownloads}</div>;
  } else if (downloads > downloads2) {
    return <div style={{ color: "green" }}>{formattedDownloads}</div>;
  } else {
    return <div style={{ color: "red" }}>{value}</div>;
  }
};

export const formatDownloads2 = (rowData, index) => {
  const downloads = rowData.downloads[1].toLocaleString();
  return downloads;
};

export const textColorRevenue = (rowData) => {
  const revenue = rowData.revenue[0];
  const revenue2 = rowData.revenue[1];
  const value = formatCurrency(revenue);

  if (revenue === revenue2) {
    return <div>{value}</div>;
  } else if (revenue > revenue2) {
    return <div style={{ color: "green" }}>{value}</div>;
  } else {
    return <div style={{ color: "red" }}>{value}</div>;
  }
};

export const textColorRevenue2 = (rowData) => {
  // const revenue = Object.values(rowData.data)[1].revenue;
  // const value = formatCurrency(revenue);
  const value2 = formatCurrency(rowData.revenue[1]);
  return value2;
};

export const formatCurrency = (value) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const gameNameTemplate = (rowData) => {
  switch (rowData.name) {
    case "Genshin Impact":
      return <img src={GenshinBG} width="300" />;
    case "Honkai Star Rail":
      return <img src={StarRailBG} width="300" />;
    case "Honkai Impact 3rd":
      return <img src={HonkaiBG} width="300" />;
  }
};
export const serverTemplate = (rowData) => {
  console.log(rowData);
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
