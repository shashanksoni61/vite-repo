import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [summaryData, setSummaryData] = useState([]);

  return (
    <AppContext.Provider value={{ summaryData, setSummaryData }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
