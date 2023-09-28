import GachaTable from "./gacha-table";
import GetData from "../../hooks/data-fetch";
import { useMonthState } from "../../context/month-context";
import Loading from "../loading";
export default function GachaTableContainer() {
  const { selectedMonth } = useMonthState();
  const { status, data, error, isFetching } = GetData();
  if (status === "loading") {
    return <Loading />;
  }

  // FILTER TO HIDE GAMES THAT DONT HAVE A DATA DURING A SPECIFIC MONTH
  const filteredData = data.filter(function (el) {
    const threshold = selectedMonth;

    return el.downloads.length > threshold;
  });

  let indexesToKeep = [selectedMonth, selectedMonth + 1];

  // FILTER TO ONLY KEEP THE SElecTED MONTH DATA AND THE MONTH BEFORE IT
  // SORTING ONLY WORKS WITH THE INITIAL DATA
  // IF DATA CHANGED, SORTING WONT WORK PROPERLY, SO THIS IS THE FIX
  const filteredArray = filteredData.map((item, i) => {
    const transformedObject = {
      id: item.id,
      name: item.name,
      server: item.server,
      downloads: item.downloads[selectedMonth],
      downloads2: item.downloads[selectedMonth + 1],
      revenue: item.revenue[selectedMonth],
      revenue2: item.revenue[selectedMonth + 1],
      expandData: item.expandData.map((subItem) => ({
        revenueAndroid: [
          subItem.revenueAndroid[selectedMonth],
          subItem.revenueAndroid[selectedMonth + 1],
        ],
        revenueApple: [
          subItem.revenueApple[selectedMonth],
          subItem.revenueApple[selectedMonth + 1],
        ],
        downloadsAndroid: [
          subItem.downloadsAndroid[selectedMonth],
          subItem.downloadsAndroid[selectedMonth + 1],
        ],
        downloadsApple: [
          subItem.downloadsApple[selectedMonth],
          subItem.downloadsApple[selectedMonth + 1],
        ],
      })),
    };

    return transformedObject;
  });

  return <GachaTable filteredArray={filteredArray} />;
}
