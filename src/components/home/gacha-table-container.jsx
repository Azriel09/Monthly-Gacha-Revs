import GachaTable from "./gacha-table";
import GetData from "../../hooks/data-fetch";
import { useMonthState } from "../../context/month-context";
import Loading from "../loading";
import { useEffect } from "react";
import { useLocalStorage } from "../../context/local-storage";

export default function GachaTableContainer() {
  const { selectedMonth } = useMonthState();
  const { localStorageData, setLocalStorageData } = useLocalStorage();
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

  // SElecTEDMONTH + 1 is the previous month
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

  const userPins = [3, 4];
  const filteredArray2 = [...filteredArray];

  const reorderedArray = filteredArray2.sort((a, b) => {
    const aIndex = userPins.indexOf(a.id);
    const bIndex = userPins.indexOf(b.id);

    // IF BOTH A & B IN USER PINS, MAINTAIN ORDER
    // IF BOTH A & B NOT IN USER PINS, MAINTAIN ORDER
    if ((aIndex !== -1 && bIndex !== -1) || (aIndex === -1 && bIndex === -1)) {
      return 0;
    }

    // IF A IN USERPINS, IT SHOULD BE PLACED BEFORE B
    if (aIndex !== -1) {
      return -1;
    }

    // IF B IN USER PINS, IT SHOULD BE PLACED AFTER A
    return 1;
  });

  return (
    <div style={{ overflow: "hidden" }}>
      <GachaTable
        filteredArray={reorderedArray}
        localStorageData={localStorageData}
      />
    </div>
  );
}
