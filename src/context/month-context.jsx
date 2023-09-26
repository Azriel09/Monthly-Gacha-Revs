import React, { useContext, createContext, useState } from "react";

export const MonthContext = createContext();

export function MonthProvider({ children }) {
  const [selectedMonth, setSelectedMonth] = useState(0);
  console.log(selectedMonth);
  return (
    <MonthContext.Provider value={{ selectedMonth, setSelectedMonth }}>
      {children}
    </MonthContext.Provider>
  );
}

export function useMonthState() {
  const context = useContext(MonthContext);
  if (!context) {
    throw new Error("useMonthState must be used within a MonthProvider");
  }

  return context;
}
