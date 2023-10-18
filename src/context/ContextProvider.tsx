import React, { createContext, useState } from "react";

type ContextProps = {
  children: React.ReactNode;
};
type FolderContextType = {
  activeFolder: string;
  setActiveFolder: React.Dispatch<React.SetStateAction<string>>;
};

export const GlobalContext = createContext<FolderContextType>(
  {} as FolderContextType
);
export const ContextProvider = ({ children }: ContextProps) => {
  const [activeFolder, setActiveFolder] = useState("");
  console.log(activeFolder);
  return (
    <GlobalContext.Provider value={{ activeFolder, setActiveFolder }}>
      {children}
    </GlobalContext.Provider>
  );
};
