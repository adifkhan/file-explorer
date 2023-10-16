import React, { createContext, useState } from "react";

type ContextProps = {
  children: React.ReactNode;
};

export const GlobalContext = createContext({});
export const ContextProvider = ({ children }: ContextProps) => {
  const [activeFolder, setActiveFolder] = useState("");
  return (
    <GlobalContext.Provider value={{ activeFolder, setActiveFolder }}>
      {children}
    </GlobalContext.Provider>
  );
};
