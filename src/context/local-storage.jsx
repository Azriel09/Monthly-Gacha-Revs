import React, { useContext, createContext, useState, useEffect } from "react";

export const LocalStorageContext = createContext();
export function useLocalStorage() {
  return useContext(LocalStorageContext);
}

export function LocalStorageProvider({ children }) {
  const [localStorageData, setLocalStorageData] = useState({});

  // LOAD DATA
  useEffect(() => {
    if (!localStorage.getItem("gameList")) {
      // IF IT DOESNT EXIST, CREATE
      localStorage.setItem("gameList", JSON.stringify([]));
      const game = localStorage.getItem("gameList");
      setLocalStorageData(JSON.parse(game));
    } else {
      const game = localStorage.getItem("gameList");
      setLocalStorageData(JSON.parse(game));
    }
  }, []);

  const updateLocalStorageValue = (newValue) => {
    // Retrieve existing data from local storage
    const existingData = JSON.parse(localStorage.getItem("gameList")) || {};

    // Update the specific value within the data
    existingData[key] = newValue;

    // Save the updated data back to local storage
    localStorage.setItem("yourLocalStorageKey", JSON.stringify(existingData));
  };
  return (
    <LocalStorageContext.Provider
      value={{
        localStorageData,
        updateLocalStorageValue,
        setLocalStorageData,
      }}
    >
      {children}
    </LocalStorageContext.Provider>
  );
}
